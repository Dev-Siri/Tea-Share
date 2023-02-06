import "@styles/globals.css";
import dynamic from "next/dynamic";
import { useRouter, type NextRouter } from "next/router";
import { Suspense } from "react";

import type { NextPage } from "next";
import type { AppProps } from "next/app";

const Toaster = dynamic(() => import("react-hot-toast").then(({ Toaster }) => Toaster));
const ContextProvider = dynamic(() => import("@context/ContextProvider"));
const ProgressBar = dynamic(() => import("nextjs-progressbar"));
const Navbar = dynamic(() => import("@components/Navbar"));
const Layout = dynamic(() => import("@components/Layout"));
const Loader = dynamic(() => import("@components/Loader"));

const App: NextPage<AppProps> = ({ Component, pageProps }) => {
  const router: NextRouter = useRouter();

  return (
    <ContextProvider>
      <Layout>
        <Toaster toastOptions={{ className: "dark:bg-dark-gray dark:text-white" }} />
        <ProgressBar
          options={{
            showSpinner: false,
          }}
        />
        {router.pathname !== "/auth" && <Navbar />}
        <Suspense fallback={<Loader visible />}>
          <article className="flex dark:bg-dark-gray dark:text-white">
            <Component {...pageProps} />
          </article>
        </Suspense>
      </Layout>
    </ContextProvider>
  );
};

export default App;
