import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/app-providers";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

const fontSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fontDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ahmed-portfolio.vercel.app"),
  title: {
    default: "Ahmed Hassan Khawaja",
    template: "%s · Ahmed Hassan Khawaja",
  },
  description:
    "Second-year Software Engineering student at UNSW Sydney. Editorial, minimal portfolio featuring selected projects.",
  openGraph: {
    title: "Ahmed Hassan Khawaja",
    description:
      "Second-year Software Engineering student at UNSW Sydney. Selected projects and contact links.",
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
    <html lang="en" suppressHydrationWarning data-accent="lavender">
      <body className={`${fontSans.variable} ${fontDisplay.variable} antialiased`}>
        <AppProviders>
          <div className="min-h-dvh bg-background text-foreground">
            <Header />
            <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
              {children}
            </main>
            <Footer />
          </div>
        </AppProviders>
      </body>
    </html>
  );
}
