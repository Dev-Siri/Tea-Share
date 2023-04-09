import lazy from "next/dynamic";

import type { FC } from "react";

import icon from "./icon.svg";

const Image = lazy(() => import("next/image"));

const NotFound: FC = () => (
  <article className="-mt-16 flex h-screen w-screen flex-col items-center justify-center">
    <Image src={icon} alt="Tea Share Logo" width={200} height={200} className="bg-primary rounded-full" />
    <h1 className="mb-4 mt-2 text-7xl font-bold">404</h1>
    <h3 className="mb-2 px-2 text-center text-3xl">This page could not be found.</h3>
  </article>
);

export default NotFound;
