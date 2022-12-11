import React, { type FC } from "react";
import { TiTick } from "react-icons/ti";

import type { ColorInputProps } from "../types";
import useStateContext from "../hooks/useStateContext";

const ColorInput: FC<ColorInputProps> = ({ color, handleClick }) => {
  const { themeColor } = useStateContext();

  return (
    <button
      className="mt-5 flex h-[60px] w-[60px] cursor-pointer items-center rounded-full border-none"
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <span className="ml-6">{themeColor === color && <TiTick color="white" fontSize={14} />}</span>
    </button>
  );
};
export default ColorInput;
