import "../styles/globals.css";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import Nprogress from "nprogress";
import Router from "next/router";

import type { AppProps } from "next/app";
import type { NextPage } from "next";

const Toaster = dynamic(() => import("react-hot-toast").then(({ Toaster }) => Toaster));
const ContextProvider = dynamic(() => import("../context/ContextProvider"));
const Layout = dynamic(() => import("../components/Layout"));

Router.events.on("routeChangeStart", () => Nprogress.start());
Router.events.on("routeChangeComplete", () => Nprogress.done(false));

const App: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Suspense>
    <ContextProvider>
      <Layout>
        <Toaster toastOptions={{ className: "dark:bg-dark-gray dark:text-white" }} />
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  </Suspense>
);

export default App;
