import { writable } from "svelte/store";

import type { User } from "$lib/types";

const user = writable<User>();

export default user;
