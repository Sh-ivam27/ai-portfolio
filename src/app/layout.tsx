import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shivam Madan — CS Student & Builder",
  description:
    "Portfolio of Shivam Madan, a 2nd-year Computer Science student at BITS Pilani, Hyderabad Campus.",
  keywords: ["Shivam Madan", "BITS Pilani", "CS Student", "Portfolio", "Full Stack Developer"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="grain">{children}</body>
    </html>
  );
}