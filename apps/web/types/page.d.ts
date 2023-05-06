import type { Metadata } from "next";
import type { PropsWithChildren, ReactNode } from "react";

interface DefaultProps {
  params: Record<string, string>;
  searchParams: Record<string, string>;
}

export type PageComponent<P = DefaultProps> = (props: P) => ReactNode | Promise<ReactNode>;

export type LayoutComponent<P = {}> = (
  props: PropsWithChildren & {
    params: Record<string, string>;
  }
) => ReactNode | Promise<ReactNode>;

export type LoadingComponent = () => ReactNode;
export type ErrorComponent = (props: { error: Error; reset(): void }) => ReactNode;

export type GenerateMetadata<P = DefaultProps> = (props: P) => Metadata | Promise<Metadata>;
