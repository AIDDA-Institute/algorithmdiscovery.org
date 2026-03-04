import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  console.log('[signup] POST hit', {
    vercelEnv: process.env.VERCEL_ENV ?? 'local',
    vercelUrl: process.env.VERCEL_URL ?? 'local',
    nodeEnv: process.env.NODE_ENV ?? 'unknown',
    hasResendKey: !!process.env.RESEND_API_KEY,
    resendKeyLength: process.env.RESEND_API_KEY?.length ?? 0,
  });

  try {
    if (!process.env.RESEND_API_KEY) {
      console.error('[signup] Missing RESEND_API_KEY', {
        vercelEnv: process.env.VERCEL_ENV ?? 'local',
        vercelUrl: process.env.VERCEL_URL ?? 'local',
      });

      return NextResponse.json(
        {
          error: 'Missing RESEND_API_KEY',
          env: process.env.VERCEL_ENV ?? 'local',
        },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    console.log('[signup] Resend client initialized');

    let body;
    try {
      body = await request.json();
      console.log('[signup] Request body parsed', {
        hasName: !!body?.name,
        hasEmail: !!body?.email,
      });
    } catch (parseError) {
      console.error('[signup] Failed to parse request body', parseError);
      return NextResponse.json(
        { error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email } = body;

    if (!name || !email) {
      console.warn('[signup] Validation failed: missing name or email', {
        name,
        email,
      });

      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2) {
      console.warn('[signup] Validation failed: name too short', {
        trimmedNameLength: name.trim().length,
      });

      return NextResponse.json(
        { error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!emailRegex.test(email)) {
      console.warn('[signup] Validation failed: invalid email', {
        email,
      });

      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const trimmedName = name.trim();

    console.log('[signup] Validation passed', {
      normalizedEmail,
      trimmedName,
    });

    let existingContact = null;

    try {
      console.log('[signup] Checking existing contacts...');
      const contacts = await resend.contacts.list();

      console.log('[signup] contacts.list() response summary', {
        hasData: !!contacts?.data,
        nestedHasData: !!contacts?.data?.data,
        contactCount: Array.isArray(contacts?.data?.data)
          ? contacts.data.data.length
          : null,
        error: contacts?.error ?? null,
      });

      const contactsArray = contacts.data?.data;

      if (Array.isArray(contactsArray)) {
        existingContact = contactsArray.find(
          (contact: { email: string }) =>
            contact.email.toLowerCase() === normalizedEmail
        );
      }

      console.log('[signup] Existing contact lookup done', {
        foundExistingContact: !!existingContact,
      });
    } catch (err) {
      console.error('[signup] Error checking contacts:', err);
      existingContact = null;
    }

    if (existingContact) {
      console.log('[signup] Contact already exists, skipping create/send', {
        normalizedEmail,
      });

      return NextResponse.json(
        { success: true, existing: true, message: 'You are already signed up!' },
        { status: 200 }
      );
    }

    console.log('[signup] Creating contact...', { normalizedEmail });

    const createResult = await resend.contacts.create({
      email: normalizedEmail,
      firstName: trimmedName.split(' ')[0],
      lastName: trimmedName.split(' ').slice(1).join(' ') || undefined,
    });

    console.log('[signup] contacts.create() result', {
      data: createResult?.data ?? null,
      error: createResult?.error ?? null,
    });

    const { error: createError } = createResult;

    if (createError) {
      console.error('[signup] Failed to create contact:', createError);

      return NextResponse.json(
        { error: 'Failed to create contact. Please try again later.' },
        { status: 500 }
      );
    }

    console.log('[signup] Contact created successfully', { normalizedEmail });

    console.log('[signup] Sending welcome email...', {
      from: 'Institute for Algorithm Mining <noreply@algomining.org>',
      to: normalizedEmail,
    });

    const emailResult = await resend.emails.send({
      from: 'Institute for Algorithm Mining <noreply@algomining.org>',
      to: normalizedEmail,
      subject: 'Welcome to the Institute for Algorithm Mining',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Institute for Algorithm Mining</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #fafaf9;">
            <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #fafaf9;">
              <tr>
                <td align="center" style="padding: 40px 20px;">
                  <table width="600" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                    <tr>
                      <td style="padding: 40px 40px 20px 40px; text-align: center; border-bottom: 1px solid #e7e5e4;">
                        <h1 style="margin: 0 0 12px 0; font-size: 32px; font-weight: 400; color: #1c1917; letter-spacing: -0.025em; line-height: 1.1;">
                          Institute for <span style="font-weight: 300; color: #a8a29e;">Algorithm Mining</span>
                        </h1>
                        <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #78716c;">
                          Coordinating research, knowledge sharing, and networking around AI-driven algorithm discovery.
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 40px;">
                        <h2 style="margin: 0 0 20px 0; font-size: 24px; font-weight: 400; color: #1c1917; letter-spacing: -0.025em;">
                          Welcome, ${trimmedName}!
                        </h2>
                        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #44403c;">
                          Thank you for your interest in the Institute for Algorithm Mining. We've received your signup and will reach out to you soon with more information about upcoming events, research opportunities, and ways to get involved.
                        </p>
                        <p style="margin: 0 0 20px 0; font-size: 16px; line-height: 1.6; color: #44403c;">
                          In the meantime, feel free to explore our website and follow us on our social channels for the latest updates.
                        </p>
                        <div style="margin: 30px 0; padding: 20px; background-color: #f5f5f4; border-radius: 6px; border-left: 3px solid #10b981;">
                          <p style="margin: 0; font-size: 14px; color: #57534e;">
                            <strong>Your signup details:</strong><br>
                            Name: ${trimmedName}<br>
                            Email: ${normalizedEmail}
                          </p>
                        </div>
                        <p style="margin: 0; font-size: 14px; color: #78716c;">
                          Best regards,<br>
                          The Institute for Algorithm Mining Team
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding: 20px 40px; border-top: 1px solid #e7e5e4; text-align: center;">
                        <p style="margin: 0; font-size: 12px; color: #a8a29e;">
                          This is an automated message. Please do not reply to this email.
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    console.log('[signup] emails.send() result', {
      data: emailResult?.data ?? null,
      error: emailResult?.error ?? null,
    });

    const { error: emailError } = emailResult;

    if (emailError) {
      console.error('[signup] Resend email error:', emailError);

      return NextResponse.json(
        { success: true, message: 'Signup successful!' },
        { status: 200 }
      );
    }

    console.log('[signup] Signup flow completed successfully', {
      normalizedEmail,
    });

    return NextResponse.json(
      { success: true, message: 'Signup successful! Check your email for confirmation.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('[signup] Unhandled signup error:', error);

    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}