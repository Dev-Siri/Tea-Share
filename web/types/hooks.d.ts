import type { DependencyList, EffectCallback } from "react";

import type { FirebaseUser } from "./user";

export type SessionHook = () => FirebaseUser;
export type DidMountEffectHook = (effect: EffectCallback, deps: DependencyList) => void;
