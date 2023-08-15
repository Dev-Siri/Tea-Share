import { z } from "zod";

const commentSchema = z.object({
  comment: z.string().nonempty("Comment cannot be empty."),
});

export default commentSchema;
