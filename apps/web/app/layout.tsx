import lazy from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";

import type { LayoutComponent } from "@/types";
import type { Metadata } from "next";

import { PAGE_CREATOR, PAGE_DESCRIPTION, PAGE_KEYWORDS, PAGE_TITLE, PAGE_URL } from "@/constants/pageInfo";
import { APPLE_TOUCH_ICON, APPLE_TOUCH_STARTUP_IMAGE_SIZES } from "@/constants/pwa";

import Logo from "@/components/Logo";
import NavLinks from "@/components/NavLinks";
import { AiOutlineSearch } from "@react-icons/all-files/ai/AiOutlineSearch";

const AppToaster = lazy(() => import("@/components/AppToaster"));
const SearchBar = lazy(() => import("@/components/SearchBar"));
const Provider = lazy(() => import("@/components/Provider"));
const Navbar = lazy(() => import("@/components/Navbar"));

const inter = Inter({
  preload: true,
  display: "swap",
  fallback: ["system-ui", "arial"],
  subsets: ["latin", "cyrillic", "greek", "vietnamese"],
});

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  creator: PAGE_CREATOR,
  keywords: PAGE_KEYWORDS,
  applicationName: PAGE_TITLE,
  metadataBase: new URL(PAGE_URL),
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
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: PAGE_TITLE,
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  icons: {
    apple: APPLE_TOUCH_ICON,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN,
    yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION_TOKEN,
  },
  appleWebApp: {
    title: PAGE_TITLE,
    startupImage: APPLE_TOUCH_STARTUP_IMAGE_SIZES.map(({ height, width }) => ({
      url: `../pwa/apple-splash/apple-splash-${width}-${height}`,
      media: `(device-width: ${width}px) and (device-height: ${height}px)`,
    })),
  },
};

const RootLayout: LayoutComponent = ({ children }) => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <Navbar>
        <Logo />
        <SearchBar>
          <AiOutlineSearch size={22} />
        </SearchBar>
        <NavLinks />
      </Navbar>
      <Provider>
        <main className={`${inter.className} dark:bg-dark-gray dark:text-white`}>
          <AppToaster />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
