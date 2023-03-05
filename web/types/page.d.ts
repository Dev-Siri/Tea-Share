import type { Metadata } from "next";
import type { ReactNode } from "react";
import type { ErrorProps, GenerateMetadataProps, LayoutProps, PageProps } from "./props";

export type PageComponent = (props: PageProps) => ReactNode | Promise<ReactNode>;
export type LayoutComponent = (props: LayoutProps) => ReactNode | Promise<ReactNode>;
export type LoadingComponent = () => ReactNode;
export type ErrorComponent = (props: ErrorProps) => ReactNode;

export type GenerateMetadata = (props: GenerateMetadataProps) => Metadata | Promise<Metadata>;
