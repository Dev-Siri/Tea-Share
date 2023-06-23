import { writable } from "svelte/store";

import type { User } from "@/app";

const user = writable<User>();

export default user;
