import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description: "Curated collection of papers, frameworks, tools, and learning materials for AI-driven algorithm discovery research.",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
