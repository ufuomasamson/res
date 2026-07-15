import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal Operations",
  description:
    "Interactive petroleum terminal operations — storage, dock, pipeline, and control center storytelling.",
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
