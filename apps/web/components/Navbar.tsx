"use client";
import { usePathname } from "next/navigation";
import { useEffect, type FC } from "react";

import type { WithChildren } from "@/types";

const Navbar: FC<WithChildren> = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    const onPageLoad = async () => {
      const { toast } = await import("react-hot-toast");

      toast.remove();
    };

    onPageLoad();
  }, [pathname]);

  if (pathname === "/auth") return null;

  return <nav className="bg-light-gray mb-9 flex h-16 items-center justify-between dark:bg-black dark:text-white min-[700px]:mb-0">{children}</nav>;
};

export default Navbar;
