import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ankush Mehra | AI Automation & Voice Agent Developer",
  description: "I design AI systems that replace manual sales, support, and follow-ups. Specialized in n8n, Vapi, and LLM workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="antialiased selection:bg-blue-500/30 selection:text-white bg-[#050505] text-white">{children}</body>
    </html>
  );
}
