import dynamic from "next/dynamic";

import type { FC } from "react";
import type { ColorInputProps } from "../types";

import useStateContext from "@hooks/useStateContext";

const TiTick = dynamic(() => import("@react-icons/all-files/ti/TiTick").then(({ TiTick }) => TiTick));

const ColorInput: FC<ColorInputProps> = ({ color, onClick }) => {
  const { themeColor } = useStateContext();

  return (
    <button
      className="mt-5 flex h-[60px] w-[60px] cursor-pointer items-center rounded-full border-none"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      <span className="ml-6">{themeColor === color && <TiTick color="white" fontSize={14} />}</span>
    </button>
  );
};
export default ColorInput;
