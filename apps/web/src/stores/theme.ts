import { writable } from "svelte/store";

import type { Theme } from "../app";

const theme = writable<Theme>("light");

export default theme;
