"use client";
import { useRouter } from "next/navigation";

import type { FC, PropsWithChildren, UIEventHandler } from "react";

interface Props extends PropsWithChildren {
  currentPage: number;
}

const PostsPresenter: FC<Props> = ({ children, currentPage }) => {
  const router = useRouter();

  const onPostListScroll: UIEventHandler<HTMLElement> = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const didScrollToBottom = scrollHeight - scrollTop === clientHeight;
    const didScrollToTop = scrollTop === 0;

    if (didScrollToBottom) {
      router.push(`/?page=${++currentPage}`);
    } else if (didScrollToTop && currentPage > 1) {
      router.push(`/?page=${--currentPage}`);
    }
  };

  return (
    <article onScroll={onPostListScroll} className="h-screen w-full overflow-y-auto px-4 pb-10 pt-4 min-[1002px]:w-[70%]">
      {children}
    </article>
  );
};

export default PostsPresenter;
