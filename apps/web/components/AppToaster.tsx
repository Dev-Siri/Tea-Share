"use client";
import { Toaster } from "react-hot-toast";

import type { FC } from "react";

const AppToaster: FC = () => <Toaster toastOptions={{ className: "dark:bg-dark-gray dark:text-white shadow-md" }} />;

export default AppToaster;
