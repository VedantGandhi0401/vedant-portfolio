import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { siteUrl } from "@/lib/config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Vedant Gandhi | Software Engineer",
  description:
    "Vedant Gandhi is a software engineer specialising in full-stack development, cloud technologies, and Generative AI. Currently building digital products at Axis Mutual Fund.",
  keywords: [
    "Vedant Gandhi",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "AWS",
    "Generative AI",
    "Mumbai",
  ],
  authors: [{ name: "Vedant Gandhi" }],
  openGraph: {
    title: "Vedant Gandhi | Software Engineer",
    description:
      "Software engineer experienced in full-stack development, cloud technologies, and Generative AI.",
    url: baseUrl,
    siteName: "Vedant Gandhi",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${baseUrl}/og.png`,
        width: 1200,
        height: 630,
        alt: "Vedant Gandhi | Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Gandhi | Software Engineer",
    description:
      "Software engineer experienced in full-stack development, cloud technologies, and Generative AI.",
    images: [`${baseUrl}/og.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
