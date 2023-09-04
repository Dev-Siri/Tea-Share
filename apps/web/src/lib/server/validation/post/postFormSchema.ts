import { z } from "zod";

const postFormSchema = z.object({
  caption: z.string(),
  image: z.instanceof(Blob, { message: "The uploaded image is in the wrong format." }).refine(file => !file.size || file.type.startsWith("image/"), {
    message: "The file you tried to upload is not an image.",
  }),
});

export default postFormSchema;
