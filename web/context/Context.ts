/* eslint-disable no-unused-vars */
import { createContext } from "react";
import type { User as FirebaseUser } from "firebase/auth";

import type { ContextItems } from "../types";

const Context = createContext<ContextItems>({});

export default Context;
