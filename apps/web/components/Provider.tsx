"use client";
import { ThemeProvider } from "next-themes";

import type { FC, PropsWithChildren } from "react";

const Provider: FC<PropsWithChildren> = ({ children }) => <ThemeProvider attribute="class">{children}</ThemeProvider>;

export default Provider;
