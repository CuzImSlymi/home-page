import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";

const display = Space_Grotesk({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://slymi.org"),
  title: "Slymi's Portfolio",
  description:
    "I'm Justin, a full-stack engineer with expertise in artificial intelligence and production-ready systems.",
  keywords: ["Slymi", "CuzImSlymi", "Justin", "portfolio"],
  authors: [{ name: "Justin", url: "https://github.com/CuzImSlymi" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://slymi.org",
    siteName: "Slymi",
    title: "Slymi's Portfolio",
    description:
      "I'm Justin, a full-stack engineer with expertise in artificial intelligence and production-ready systems.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Slymi's portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Slymi's Portfolio",
    description:
      "I'm Justin, a full-stack engineer with expertise in artificial intelligence and production-ready systems.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0908",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${mono.variable} antialiased`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
