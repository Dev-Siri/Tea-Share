import type { LayoutComponent } from "@/types";

import Navbar from "@/components/Navbar";

const MainLayout: LayoutComponent = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="dark:bg-dark-gray dark:text-white">{children}</main>
    </>
  );
};

export default MainLayout;
