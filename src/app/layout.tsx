import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deckr - AI-Powered Pitch Deck Generator",
  description: "Transform your business idea into an investor-ready pitch deck with AI. Generate professional presentations in minutes. Start free today.",
  keywords: ["pitch deck", "AI generator", "startup", "investor", "presentation", "business plan", "funding"],
  authors: [{ name: "Deckr Team" }],
  openGraph: {
    title: "Deckr - AI-Powered Pitch Deck Generator",
    description: "Transform your business idea into an investor-ready pitch deck with AI. Start free today.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
