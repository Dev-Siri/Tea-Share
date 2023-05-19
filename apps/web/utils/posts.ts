import type { LikedPeopleCalculator } from "@/types";

import useSession from "@/hooks/useSession";

export const LikedPeople: LikedPeopleCalculator = people => {
  const user = useSession();

  if (!people.length) return "0 Likes";

  if (people.includes(user.name)) {
    if (people.length === 1) return "You liked this post";

    return `You and ${people.length - 1} ${people.length - 1 === 1 ? "other" : "others"}`;
  }

  if (people.length - 1 === 0) return `${people[0]} liked this post`;

  return `${people[0]} and ${people.length - 1} others`;
};
