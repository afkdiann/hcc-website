import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://afkdiann.github.io/hcc-website"),
  title: {
    template: "%s | Human-Centered Computing (HCC)",
    default: "Home | Human-Centered Computing (HCC)",
  },
  description: "Human-Centered Computing is a research theme at the Institute for Advanced Computational Science (IACS) at Stony Brook University.",
  openGraph: {
    title: "Human-Centered Computing (HCC)",
    description: "Human-Centered Computing is a research theme at the Institute for Advanced Computational Science (IACS) at Stony Brook University.",
    url: "https://afkdiann.github.io/hcc-website",
    siteName: "Human-Centered Computing",
    images: [
      {
        url: "/logos/hcc_logo_black.svg",
        width: 800,
        height: 600,
        alt: "HCC Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human-Centered Computing (HCC)",
    description: "Human-Centered Computing is a research theme at the Institute for Advanced Computational Science (IACS) at Stony Brook University.",
    images: ["/logos/hcc_logo_black.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable}  antialiased`}>
        {children}
      </body>
    </html>
  );
}
