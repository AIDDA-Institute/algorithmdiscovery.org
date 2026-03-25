import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Benchmarks",
  description: "Comprehensive performance comparisons of open-source AI-driven algorithm discovery frameworks across multiple metrics.",
};

export default function BenchmarksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
