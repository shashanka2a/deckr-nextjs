import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Deckr - Tell Your Story",
  description: "Create stunning presentations that captivate your audience. Deckr makes it simple to design, collaborate, and share your ideas.",
  keywords: ["presentations", "design", "collaboration", "storytelling", "slides"],
  authors: [{ name: "Deckr Team" }],
  openGraph: {
    title: "Deckr - Tell Your Story",
    description: "Create stunning presentations that captivate your audience.",
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
