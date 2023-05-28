import type { FC } from "react";

import Icon from "@/components/icons/AppIcon";
import Link from "next/link";

interface Props {
  bigger?: boolean;
}

const Logo: FC<Props> = ({ bigger }) => (
  <section className={`flex items-center ${bigger && "mt-3"}`}>
    <Link href="/" className="bg-primary mx-2 rounded-full">
      <Icon height={bigger ? 60 : 50} width={bigger ? 60 : 50} />
    </Link>
    <p className={bigger ? "text-3xl font-bold" : "hidden md:block"}>Tea Share</p>
  </section>
);

export default Logo;
