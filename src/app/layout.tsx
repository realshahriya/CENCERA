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
  title: "CENCERA - Trust & Safety Infrastructure",
  description: "Cencera is an API-first trust & safety infrastructure for Web3. We help wallets, exchanges & dApps by providing real-time risk detection & user safety layer.",
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CENCERA - Trust & Safety Infrastructure",
    description: "Cencera is an API-first trust & safety infrastructure for Web3. We help wallets, exchanges & dApps by providing real-time risk detection & user safety layer.",
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
