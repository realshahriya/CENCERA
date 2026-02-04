import type { Metadata } from "next";
import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cencera.xyz'),
  title: {
    default: "CENCERA - Trust & Safety Infrastructure",
    template: "%s | CENCERA"
  },
  description: "Cencera is an API-first trust & safety infrastructure for Web3. We help wallets, exchanges & dApps by providing real-time risk detection & user safety layer.",
  keywords: [
    "Web3 Security",
    "Trust Score",
    "Risk Detection",
    "Wallet Profiling",
    "Crypto Safety",
    "Anti-Phishing",
    "Transaction Simulation",
    "Smart Contract Analysis",
    "Blockchain Intelligence"
  ],
  authors: [{ name: "Cencera Team" }],
  creator: "Cencera",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cencera.xyz",
    title: "CENCERA - Trust & Safety Infrastructure",
    description: "Cencera is an API-first trust & safety infrastructure for Web3. We help wallets, exchanges & dApps by providing real-time risk detection & user safety layer.",
    siteName: "CENCERA",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "CENCERA - Trust & Safety Infrastructure",
    description: "Real-time risk detection & user safety layer for Web3.",
    images: ["/logo.png"],
    creator: "@cencera_xyz",
  },
  icons: {
    icon: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className={`${poppins.variable} ${montserrat.variable} antialiased selection:bg-neon selection:text-void`}
      >
        {children}
      </body>
    </html>
  );
}
