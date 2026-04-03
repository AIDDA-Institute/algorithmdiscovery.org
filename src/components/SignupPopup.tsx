"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Loader2, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function SignupPopup({ isOpen, onClose }: SignupPopupProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [isExisting, setIsExisting] = useState(false);

  // validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    if (!name.trim()) {
      setError("Please enter your name");
      return false;
    }
    if (name.trim().length < 2) {
      setError("Name must be at least 2 characters");
      return false;
    }
    if (!email.trim()) {
      setError("Please enter your email address");
      return false;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsExisting(data.existing === true);
      setSuccess(true);
      setName("");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after a delay so the animation doesn't show reset
    setTimeout(() => {
      setName("");
      setEmail("");
      setError("");
      setSuccess(false);
      setIsExisting(false);
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={handleClose}
      />

      {/* Popup */}
      <FadeIn className="relative w-full max-w-md">
        <div className="overflow-hidden rounded-[1.75rem] border border-stone-200 bg-white shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-stone-100 bg-stone-50 px-6 py-4">
            <h2 className="text-lg font-normal text-stone-900">
              Get Involved
            </h2>
            <button
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-stone-200 transition-colors text-stone-500"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            {success ? (
              <div className="text-center py-4">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                    <CheckCircle className="h-8 w-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-xl font-normal text-stone-900 mb-2">
                  {isExisting ? "Already Signed Up!" : "You're all set!"}
                </h3>
                <p className="text-stone-600 mb-6">
                  {isExisting
                    ? "You've already signed up and we will reach out to you soon."
                    : "Thank you for signing up. We've sent a confirmation email to you and will reach out soon with more information."}
                </p>
                <Button
                  onClick={handleClose}
                  className="rounded-full bg-stone-900 px-8 text-white hover:bg-stone-800"
                >
                  Close
                </Button>
              </div>
            ) : (
              <>
                <p className="text-stone-600 mb-6">
                  Join the AIDDA Institute. Enter your details below and we&apos;ll keep you updated on events, research, and opportunities.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-normal text-stone-700 mb-1.5"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      className="w-full rounded-lg border-stone-200 focus:border-stone-400 focus:ring-stone-400"
                      disabled={isLoading}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-normal text-stone-700 mb-1.5"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-lg border-stone-200 focus:border-stone-400 focus:ring-stone-400"
                      disabled={isLoading}
                    />
                  </div>

                  {error && (
                    <div className="text-sm text-red-600 bg-red-50 px-3 py-2 rounded-lg">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full rounded-full bg-stone-900 py-6 text-base font-normal text-white transition-colors hover:bg-stone-800 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Sign Up"
                    )}
                  </Button>
                </form>

                <p className="text-xs text-stone-400 text-center mt-4">
                  By signing up, you agree to receive updates from the AIDDA Institute.
                </p>
              </>
            )}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
