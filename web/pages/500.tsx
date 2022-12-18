import dynamic from "next/dynamic";

import Logo from "../assets/Cup.png";

const Image = dynamic(() => import("next/image"));

const InternalServerError = () => {
  return (
    <article className="flex h-screen w-screen flex-col items-center justify-center bg-white dark:bg-black">
      <Image src={Logo} alt="Tea Share Logo" className="mb-4 rounded-full bg-primary" priority height={150} width={150} />
      <div className="flex items-center">
        <h4 className="text-2xl text-black dark:text-white">500</h4>
        <div className="ml-4 mr-4 h-10 w-px rounded-md bg-light-gray dark:bg-gray-600" />
        <p className="text-black dark:text-white">There is an internal server error. Please try visiting this page later.</p>
      </div>
    </article>
  );
};

export default InternalServerError;
