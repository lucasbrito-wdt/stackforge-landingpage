import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StackForge — Full-Stack Development Environment",
  description:
    "The ultimate local development environment for PHP, Laravel, Node.js and more. One-click setup with Nginx, SSL, and multiple services.",
  openGraph: {
    title: "StackForge — Full-Stack Development Environment",
    description:
      "The ultimate local development environment for PHP, Laravel, Node.js and more.",
    url: "https://stackforge.app",
    siteName: "StackForge",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-white antialiased">{children}</body>
    </html>
  );
}
