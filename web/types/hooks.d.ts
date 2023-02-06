import type { DependencyList, EffectCallback } from "react";

type Environment = "client" | "server";

export type PageTitleHook = (environment: Environment) => string;
export type DidMountEffectHook = (effect: EffectCallback, deps: DependencyList) => void;
