import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Working Groups",
  description: "Collaborative research groups advancing AI-driven algorithm discovery across different domains and methodologies.",
};

export default function WorkingGroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
