import { z } from "zod";

const userSchema = z.object({
  userId: z.string().length(36),
  username: z.string(),
  userImage: z.string(),
  email: z.string(),
});

export default userSchema;
