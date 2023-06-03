import type { FC } from "react";

interface Props {
  height?: number;
  width?: number;
}

const LoadingSpinner: FC<Props> = ({ height, width }) => (
  <svg height={height} width={width} className="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    <circle className="opacity-25" cx={12} cy={12} r={10} stroke="white" strokeWidth={2} />
    <path
      className="opacity-75"
      fill="white"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

export default LoadingSpinner;
