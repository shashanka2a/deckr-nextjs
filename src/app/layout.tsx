import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deckr - Create decks in minutes, not hours",
  description: "Build stunning presentations with drag & drop simplicity. Collaborate in real-time and share instantly. Start free today.",
  keywords: ["presentations", "design", "collaboration", "storytelling", "slides", "fast", "simple"],
  authors: [{ name: "Deckr Team" }],
  openGraph: {
    title: "Deckr - Create decks in minutes, not hours",
    description: "Build stunning presentations with drag & drop simplicity. Start free today.",
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
