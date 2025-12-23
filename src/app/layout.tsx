import type { Metadata } from "next";
import { Syne, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CENCERA - Universal Trust Score Layer",
  description: "The Universal Trust Score Layer. We analyze on-chain and off-chain data to generate real-time reputation scores for wallets, contracts, and tokens.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CENCERA - Universal Trust Score Layer",
    description: "The Universal Trust Score Layer. We analyze on-chain and off-chain data to generate real-time reputation scores for wallets, contracts, and tokens.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${jetbrainsMono.variable} antialiased selection:bg-neon selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
