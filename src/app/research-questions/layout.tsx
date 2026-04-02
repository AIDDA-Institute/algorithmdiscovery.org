import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Research Questions",
  description: "Fundamental questions that AIDDA is working to answer.",
};

export default function ResearchQuestionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
