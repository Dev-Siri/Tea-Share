"use client";
import { usePathname } from "next/navigation";

import type { ShowNavbarProps } from "@/types";
import type { FC } from "react";

const ShowNavbar: FC<ShowNavbarProps> = ({ children, whenPathnameIsNot }) => {
  const pathname = usePathname();

  return whenPathnameIsNot === pathname && children;
};

export default ShowNavbar;
