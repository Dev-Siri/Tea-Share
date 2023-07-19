import { z } from "zod";

const postFormSchema = z.object({
  title: z
    .string()
    .nonempty("Title is required.")
    .min(4, { message: "Title must be atleast 5 characters in length." })
    .max(255, { message: "Title too long." }),
  description: z.string(),
  image: z
    .instanceof(Blob, { message: "The uploaded image is in the wrong format." })
    .refine(file => !!file, { message: "Image is required." })
    .refine(file => file.type.startsWith("image/"), {
      message: "The file you tried to upload is not an image.",
    }),
});

export default postFormSchema;
