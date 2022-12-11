import { createContext } from "react";

import type { ContextItems } from "../types";

const Context = createContext<ContextItems>({});

export default Context;
