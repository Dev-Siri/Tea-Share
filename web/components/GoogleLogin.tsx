import React, { type FC } from "react";
import { FcGoogle } from "react-icons/fc";

import type { GoogleLoginProps } from "../types";

const GoogleLogin: FC<GoogleLoginProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-light-gray bg-white p-3 duration-[250ms] hover:bg-light-gray"
  >
    <FcGoogle size={24} />
    <p className="ml-[10px] text-black">Sign in with Google</p>
  </button>
);

export default GoogleLogin;
