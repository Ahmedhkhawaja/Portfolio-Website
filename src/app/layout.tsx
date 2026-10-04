import type { Metadata, Viewport } from "next";
import { Pixelify_Sans, Press_Start_2P, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  display: "swap",
});

const arcade = Press_Start_2P({
  variable: "--font-arcade",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-portfolio.vercel.app"),
  title: {
    default: "Ahmed Hassan Khawaja | AI / Software Engineer",
    template: "%s | Ahmed Hassan Khawaja",
  },
  description:
    "AI / Software Engineer and UNSW student. I build AI tools, apps and websites that real people use.",
  openGraph: {
    title: "Ahmed Hassan Khawaja | AI / Software Engineer",
    description: "I build AI tools, apps and websites that real people use.",
    type: "website",
    url: "/",
    siteName: "Ahmed Hassan Khawaja",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#0c0e1a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelify.variable} ${arcade.variable} ${grotesk.variable} antialiased`}>
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
