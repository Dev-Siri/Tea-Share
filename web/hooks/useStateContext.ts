import { useContext } from "react";

import type { ContextItems } from "../types";

import Context from "../context/Context";

const useStateContext = () => useContext<ContextItems>(Context);

export default useStateContext;
