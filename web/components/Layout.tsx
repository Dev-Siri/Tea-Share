import React, { type FC } from "react";
import Head from "next/head";

import type { LayoutProps } from "../types";

import usePageTitle from "../hooks/usePageTitle";
import useStateContext from "../hooks/useStateContext";

const Layout: FC<LayoutProps> = ({ children }) => {
  const title = usePageTitle();
  const { themeMode } = useStateContext();

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Tea share is a brand new online social networking platform. See the latest and greatest content everyday. Sign up today to get the best experience of Tea share."
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Tea share, Tea, Social Media, Social Networking, News, Connect" />
        <meta property="og:title" content="Tea share - A brand new social networking platform" />
        <meta
          property="og:description"
          content="Tea share is a brand new social networking platform. See the latest and greatest content everyday. Sign up today to get the best experience of Tea share."
        />
        <meta property="og:image" content="/favicon.png" />
        <meta property="og:url" content="https://tea-share-web.vercel.app" />
        <meta property="og:site_name" content="Tea share" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Tea share" />
        <meta
          name="twitter:description"
          content="Tea share is a brand new social networking platform. See the latest and greatest content everyday. Sign up today to get the best experience of Tea share."
        />
        <meta name="twitter:image" content="/favicon.png" />
        <meta name="twitter:site" content="https://tea-share-web.vercel.app" />
        <meta name="twitter:creator" content="Dev-Siri" />
        <link rel="canonical" href="https://tea-share-web.vercel.app" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION_TOKEN} />
        <link rel="icon" href="/favicon.png" />
        <title>{title}</title>
      </Head>
      <main className={themeMode}>{children}</main>
    </>
  );
};

export default Layout;
