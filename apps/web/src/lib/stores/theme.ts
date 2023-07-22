import { writable } from "svelte/store";

import type { Theme } from "$lib/types";

const theme = writable<Theme>("light");

export default theme;
