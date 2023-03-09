"use client";
import { useEffect, useState, type FC } from "react";

import type { RelativeTimeProps } from "@types";

import { getRelativeTime } from "@utils/globals";

const RelativeTime: FC<RelativeTimeProps> = ({ className, dateString }) => {
  const [relativeTime, setRelativeTime] = useState("Loading...");

  useEffect(() => {
    setRelativeTime(getRelativeTime(new Date(dateString)));
  }, [dateString]);

  return <p className={className}>{relativeTime}</p>;
};

export default RelativeTime;
