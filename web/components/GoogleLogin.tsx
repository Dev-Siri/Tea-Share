"use client";
import { useRouter } from "next/navigation";

import type { FC } from "react";

import { FcGoogle } from "@react-icons/all-files/fc/FcGoogle";

const GoogleLogin: FC = () => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    const { GoogleAuth } = await import("@utils/auth");
    GoogleAuth(router);
  };

  return (
    <button
      type="button"
      onClick={loginWithGoogle}
      className="ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 border-light-gray bg-white p-3 duration-200 hover:bg-light-gray"
    >
      <FcGoogle size={24} />
      <p className="ml-[10px] text-black">Sign in with Google</p>
    </button>
  );
};

export default GoogleLogin;
