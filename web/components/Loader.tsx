import { Oval } from "react-loader-spinner";

import type { FC } from "react";
import type { LoaderProps } from "../types";

import useStateContext from "@hooks/useStateContext";

const Loader: FC<LoaderProps> = ({ visible }) => {
  const { themeColor } = useStateContext();

  if (!visible) return null;

  return (
    <div className="p-4">
      <Oval visible={visible} color={themeColor} secondaryColor="gray" />
    </div>
  );
};

export default Loader;
