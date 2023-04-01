"use client";
import lazy from "next/dynamic";

import type { FC } from "react";

const Toaster = lazy(() => import("react-hot-toast").then(({ Toaster }) => Toaster));

const AppToaster: FC = () => <Toaster toastOptions={{ className: "dark:bg-dark-gray dark:text-white shadow-md" }} />;

export default AppToaster;
