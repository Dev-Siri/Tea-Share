"use client";
import { useRouter } from "next/navigation";

import type { PropsWithChildren } from "react";

export default function GoogleLogin({ children }: PropsWithChildren) {
  const router = useRouter();

  async function loginWithGoogle() {
    const { toast } = await import("react-hot-toast");
    const { GoogleAuth } = await import("@/utils/auth");

    await GoogleAuth();

    toast.remove();
    router.refresh();
    router.replace("/");
  }

  return (
    <button
      type="button"
      onClick={loginWithGoogle}
      className="border-light-gray hover:bg-light-gray ml-2 mt-5 flex w-[250px] cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 duration-200"
    >
      {children}
    </button>
  );
}
