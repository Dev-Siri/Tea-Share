import { type FC, useState, useEffect } from "react";
import { Inter } from "@next/font/google";
import Head from "next/head";

import type { LayoutProps } from "../types";

import usePageTitle from "../hooks/usePageTitle";
import useStateContext from "../hooks/useStateContext";

import { PAGE_DESCRIPTION, PAGE_URL, PAGE_SHORT_TITLE, PAGE_FAVICON_PATH, PAGE_TITLE, PAGE_KEYWORDS } from "../constants/pageInfo";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin", "cyrillic", "greek", "vietnamese"],
});

const Layout: FC<LayoutProps> = ({ children }) => {
  const [title, setTitle] = useState(usePageTitle("server"));
  const { themeMode } = useStateContext();

  useEffect(() => {
    setTitle(usePageTitle("client"));
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={PAGE_KEYWORDS} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:image" content={PAGE_FAVICON_PATH} />
        <meta property="og:url" content={PAGE_URL} />
        <meta property="og:site_name" content={PAGE_SHORT_TITLE} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={PAGE_SHORT_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={PAGE_FAVICON_PATH} />
        <meta name="twitter:site" content={PAGE_URL} />
        <meta name="twitter:creator" content="Dev-Siri" />
        <link rel="canonical" href={PAGE_URL} />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN} />
        <link rel="icon" href={PAGE_FAVICON_PATH} />
        <title>{title}</title>
      </Head>
      <main className={`${themeMode} ${inter.className} overflow-x-hidden`}>{children}</main>
    </>
  );
};

export default Layout;
