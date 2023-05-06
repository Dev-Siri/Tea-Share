"use client";
import { useRouter } from "next/navigation";

import type { FC, PropsWithChildren } from "react";

const GoogleLogin: FC<PropsWithChildren> = ({ children }) => {
  const router = useRouter();

  const loginWithGoogle = async () => {
    const { toast } = await import("react-hot-toast");
    const { GoogleAuth } = await import("@/utils/auth");

    await GoogleAuth();

    toast.remove();
    router.refresh();
    router.replace("/");
  };

  return (
    <button
      type="button"
      onClick={loginWithGoogle}
      className="border-light-gray hover:bg-light-gray ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 duration-200"
    >
      {children}
    </button>
  );
};

export default GoogleLogin;
