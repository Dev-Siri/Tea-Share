import type { NextPage } from "next";

const InternalServerError: NextPage = () => (
  <section className="grid h-screen w-screen place-items-center">
    <div className="items-center text-center md:flex">
      <h4 className="text-2xl text-black dark:text-white">500</h4>
      <div className="mx-4 hidden h-10 w-px rounded-md bg-light-gray dark:bg-gray-600 md:inline" />
      <p className="text-black dark:text-white">There is an internal server error. Please try visiting this page later.</p>
    </div>
  </section>
);

export const config = {
  unstable_runtimeJS: false,
};

export default InternalServerError;
