import "../styles/globals.css";
import React, { Suspense } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Toaster = dynamic(() => import("react-hot-toast").then(({ Toaster }) => Toaster));
const ContextProvider = dynamic(() => import("../context/ContextProvider"));
const Layout = dynamic(() => import("../components/Layout"));

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Suspense>
    <ContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </Suspense>
);

export default App;
