import { Inter } from "next/font/google";
import "./globals.css";

import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

import ThemeProvider from "@/components/providers/ThemeProvider";
import AppToaster from "@/components/ui/AppToaster";

const inter = Inter({
  preload: true,
  display: "swap",
  fallback: ["system-ui", "arial"],
  subsets: ["latin", "cyrillic", "greek", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Tea Share",
  description:
    "Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!",
  creator: "Dev-Siri",
  keywords: ["Tea Share", "Tea", "Social Media", "Social Networking", "News", "Connect", "Share"],
  applicationName: "Tea Share",
  metadataBase: new URL("https://tea-share.vercel.app"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Tea Share",
    description:
      "Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!",
    url: "https://tea-share.vercel.app",
    siteName: "Tea Share",
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tea Share",
    description:
      "Tea Share is an online social networking platform where you can share images with everyone. Get the best experience of Tea Share by signing up today!",
  },
  icons: {
    apple: "/apple/apple-icon.png",
  },
  verification: {
    google: "9ZQX0PW-jAHsoHd2iQ8HzgApN3A0t0aiClpRHZrnf-M",
    yandex: "8b3345a29cecf753",
  },
  appleWebApp: {
    title: "Tea Share",
  },
};

const RootLayout: LayoutComponent = ({ children }) => (
  <html lang="en" className={inter.className} suppressHydrationWarning>
    <head className="block" />
    <body className="m-0 overflow-hidden p-0">
      <ThemeProvider attribute="class">
        <AppToaster />
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
