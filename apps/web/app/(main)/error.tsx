"use client";
import type { ErrorComponent } from "@/types";

const RootError: ErrorComponent = ({ error, reset }) => (
  <main className="dark:bg-dark-gray flex h-screen w-screen flex-col items-center justify-center bg-white">
    <h1 className="mb-4 mt-2 text-7xl font-bold">Oops!</h1>
    <h3 className="mb-2 text-3xl">An error has occured.</h3>
    <p className="text-center">{error.message}</p>
    <button onClick={reset} className="bg-primary border-primary hover:bg-primary-dark border-px mt-4 rounded-md p-3 px-20 duration-200">
      Try Again
    </button>
  </main>
);

export default RootError;
