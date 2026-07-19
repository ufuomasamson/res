import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminal Operations",
  description:
    "Global tanker routing, multimodal logistics, and illuminated shipping corridors across Res Logistics terminals.",
};

export default function TerminalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
