import type { FirebaseUser } from "./user";

export type SessionHook = () => Promise<FirebaseUser>;
