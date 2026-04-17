import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Torus Labs | AI Systems That Call, Chat & Convert",
  description: "We build self-hostable AI infrastructure and custom automation systems. From voice agents to marketing automation—see how we can solve your specific use case.",
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
