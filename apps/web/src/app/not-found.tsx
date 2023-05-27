import type { FC } from "react";

const NotFound: FC = () => (
  <main className="dark:bg-dark-gray -mt-16 flex h-screen w-screen flex-col items-center justify-center bg-white">
    <h1 className="mb-4 mt-2 text-7xl font-bold">404</h1>
    <h3 className="mb-2 px-2 text-center text-3xl">This page could not be found.</h3>
  </main>
);

export default NotFound;
