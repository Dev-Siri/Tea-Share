import dynamic from "next/dynamic";
import { useEffect, useState, type FC, type ReactElement } from "react";

import { LikedPeople } from "@utils/posts";

import type { User as FirebaseUser } from "firebase/auth";
import type { PostProps } from "../types";

import useStateContext from "@hooks/useStateContext";
import { getRelativeTime } from "@utils/globals";

const IoMdThumbsUp = dynamic(() => import("@react-icons/all-files/io/IoMdThumbsUp").then(({ IoMdThumbsUp }) => IoMdThumbsUp));
const RiThumbUpLine = dynamic(() => import("@react-icons/all-files/ri/RiThumbUpLine").then(({ RiThumbUpLine }) => RiThumbUpLine));
const Link = dynamic(() => import("next/link"));
const Image = dynamic(() => import("next/image"));

const Post: FC<PostProps> = ({ post }) => {
  const { themeColor } = useStateContext();
  const { image, title, people, description, _id, createdAt } = post;

  const [user, setUser] = useState<FirebaseUser | null>(null);
  const [relativeTime, setRelativeTime] = useState<string>("");
  const [likes, setLikes] = useState<string>(LikedPeople(people, user));
  const [responsiveTitle, setResponsiveTitle] = useState<string>(title);
  const [likeBTN, setLikeBTN] = useState<ReactElement | null>(null);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") as string));
    setRelativeTime(getRelativeTime(new Date(createdAt)));

    const likeBTNProps = {
      size: 25,
      color: themeColor,
    } as const;

    setLikeBTN(people.includes(user?.displayName as string) ? <IoMdThumbsUp {...likeBTNProps} /> : <RiThumbUpLine {...likeBTNProps} />);

    if (window.innerWidth < 640) {
      setResponsiveTitle(title.length > 20 ? `${title.slice(0, 16)}...` : title);
    } else {
      setResponsiveTitle(title.length > 36 ? `${title.slice(0, 30)}...` : title);
    }
  }, [themeColor, people, user?.displayName, title, createdAt]);

  const handleLikePost = async () => {
    const { LikePost } = await import("@utils/posts");
    LikePost(setLikes, setLikeBTN, people, themeColor as string, user, _id);
  };

  return (
    <article className="mb-10 h-[824px] w-full rounded-xl border-2 border-light-gray bg-white p-6 dark:border-border-gray dark:bg-black">
      <h3 className="text-3xl font-bold">{responsiveTitle}</h3>
      <p className="my-3 ml-1 overflow-y-auto break-words pb-2 text-gray-500">{relativeTime}</p>
      <Link href={`/post/${_id}`} className="cursor-pointer">
        <Image
          src={image}
          alt={title}
          height={500}
          width={1000}
          className="h-[500px] w-full rounded-lg border-2 border-light-gray object-cover dark:border-border-gray"
        />
      </Link>
      <p className="mx-1 mt-8 h-16 overflow-y-auto break-words pb-5 text-gray-500">{description}</p>
      <section className="flex pb-2.5">
        <button
          type="button"
          onClick={handleLikePost}
          disabled={people.includes(user?.displayName as string)}
          className="mt-16 flex h-8 cursor-pointer items-center border-none text-xs text-primary"
        >
          {likeBTN}
          <span className="mr-6 md:w-full" style={{ color: themeColor }}>
            &nbsp;{likes}
          </span>
        </button>
      </section>
    </article>
  );
};

export default Post;
