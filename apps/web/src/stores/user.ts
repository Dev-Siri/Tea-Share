import { writable } from "svelte/store";

import type { FirebaseUser } from "../app";

const user = writable<FirebaseUser>();

export default user;
