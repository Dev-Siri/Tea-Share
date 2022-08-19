import "../styles/globals.scss";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from 'next';
import { Toaster } from "react-hot-toast";

import { Layout } from "../components";
import { ContextProvider } from "../context/StateContext";

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <ContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
};

export default App;