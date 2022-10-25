import React, { type FC } from "react";
import { TiTick } from "react-icons/ti";

import type { ColorInputProps } from "../types";
import { useStateContext } from "../context/StateContext";

const ColorInput: FC<ColorInputProps> = ({ color, handleClick }) => {
  const { themeColor } = useStateContext();

  return (
    <button className="color-input" style={{ backgroundColor: color }} onClick={handleClick}>
      {themeColor === color && <TiTick color="white" fontSize={14} />}
    </button>
  );
};
export default ColorInput;
