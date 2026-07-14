import type { Metadata } from "next";
import { Archivo, Space_Grotesk } from "next/font/google";
import "./globals.css";

import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";

const archivo = Archivo({
  variable: "--font-archivo",
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
    "AI / Software Engineer and UNSW software engineering student. I build automation pipelines, AI powered applications, and full stack products.",
  openGraph: {
    title: "Ahmed Hassan Khawaja | AI / Software Engineer",
    description:
      "AI / Software Engineer and UNSW software engineering student. Automation pipelines, AI powered applications, and full stack products.",
    type: "website",
    url: "/",
    siteName: "Ahmed Hassan Khawaja",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${archivo.variable} ${grotesk.variable} antialiased`}>
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
