import lazy from "next/dynamic";

import type { UserInfoProps } from "@types";
import type { FC } from "react";

import { getHandle } from "@utils/globals";

const Image = lazy(() => import("next/image"));

const UserInfo: FC<UserInfoProps> = ({ user: { username, image }, postsLength }) => (
  <article className="mt-10 flex w-[80%] flex-col items-center rounded-md border-2 border-light-gray bg-white p-12 dark:border-semi-gray dark:bg-black sm:ml-5 md:ml-0 md:w-[30%] md:flex-row md:items-start lg:w-1/2">
    <Image priority src={image} alt={username} height={130} width={130} className="h-[130px] rounded-full" />
    <div className="mt-4 text-center md:mt-0 md:ml-8 md:text-start">
      <h1 className="text-3xl font-bold">{username}</h1>
      <h2 className="text-xl text-gray-500">{getHandle(username)}</h2>
      <h3 className="mt-2 text-xl">
        {postsLength} Posts By {username}
      </h3>
    </div>
  </article>
);

export default UserInfo;
