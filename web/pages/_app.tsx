import "../styles/globals.scss";
import { Suspense } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import dynamic from "next/dynamic";
import { Toaster } from "react-hot-toast";

import { ContextProvider } from "../context/StateContext";
const Layout = dynamic(() => import("../components/Layout"));

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Suspense fallback={<div />}>
    <ContextProvider>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </Suspense>
);

export default App;
