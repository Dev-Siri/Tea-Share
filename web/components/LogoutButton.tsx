import React, { type FC } from "react";
import { AiOutlineLogout } from "react-icons/ai";

import type { LogoutButtonProps } from "../types";

const LogoutButton: FC<LogoutButtonProps> = ({ handleLogout }) => (
  <button
    onClick={handleLogout}
    type="button"
    className="ml-auto mr-10 cursor-pointer rounded-full border-none bg-white p-[10px] shadow-dark dark:shadow-light"
  >
    <AiOutlineLogout color="red" size={23} />
  </button>
);

export default LogoutButton;
