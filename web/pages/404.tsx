import type { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <article className="grid h-screen w-screen place-items-center">
      <div className="flex items-center">
        <h4 className="text-2xl text-black dark:text-white">404</h4>
        <div className="ml-4 mr-4 h-10 w-px rounded-md bg-light-gray dark:bg-gray-600" />
        <p className="text-black dark:text-white">This page could not be found.</p>
      </div>
    </article>
  );
};

export const config = {
  unstable_runtimeJS: false,
};

export default NotFound;
