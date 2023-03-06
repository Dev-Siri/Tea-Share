import type { SkeletonProps } from "@types";
import type { CSSProperties, FC } from "react";

import { DARK_GRAY, SEMI_GRAY } from "@constants/colors";

const Skeleton: FC<SkeletonProps> = ({ className = "" }) => (
  <span
    aria-live="polite"
    aria-busy
    className={`loading-skeleton bg-light-gray dark:bg-dark-gray ${className.includes("rounded-full") ? className : `${className} rounded-md`}`}
    style={
      {
        "--bg-color": DARK_GRAY,
        "--flash-color": SEMI_GRAY,
      } as CSSProperties
    }
  >
    &zwnj;
    <br />
  </span>
);

export default Skeleton;
