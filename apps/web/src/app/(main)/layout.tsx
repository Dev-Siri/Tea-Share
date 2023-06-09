import type { PropsWithChildren } from "react";

import Navbar from "@/components/ui/Navbar";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Navbar />
      <main className="dark:bg-dark-gray dark:text-white">{children}</main>
    </>
  );
}
