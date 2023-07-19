import type { User } from "../../../../app";

import userSchema from "./userSchema";

const validateUser = (user: User) => {
  const { success } = userSchema.safeParse(user);

  return success;
};

export default validateUser;
