"use client";
import { ThemeProvider } from "next-themes";

import type { WithChildren } from "@/types";
import type { FC } from "react";

const Provider: FC<WithChildren> = ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>;

export default Provider;
