"use client";
import lazy from "next/dynamic";

import type { ErrorComponent } from "@/types";

import icon from "./logo.svg";

const Image = lazy(() => import("next/image"));

const RootError: ErrorComponent = ({ error }) => (
  <article className="-mt-16 flex h-screen w-screen flex-col items-center justify-center">
    <Image src={icon} alt="Tea Share Logo" width={200} height={200} className="bg-primary rounded-full" />
    <h1 className="mb-4 mt-2 text-7xl font-bold">Oops!</h1>
    <h3 className="mb-2 text-3xl">An error has occured.</h3>
    <p className="text-center">{error.message}</p>
  </article>
);

export default RootError;
