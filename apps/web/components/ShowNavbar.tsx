"use client";
import { usePathname } from "next/navigation";

import type { FC, PropsWithChildren, ReactElement } from "react";

interface Props extends PropsWithChildren {
  whenPathnameIsNot: string;
}

const ShowNavbar: FC<Props> = ({ children, whenPathnameIsNot }) => {
  const pathname = usePathname();

  return (whenPathnameIsNot !== pathname && children) as ReactElement<any, any>;
};

export default ShowNavbar;
