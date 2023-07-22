import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email."),
  password: z.string().nonempty("Password is required."),
});

export const signupSchema = loginSchema.extend({
  username: z.string().nonempty("Username is required."),
  image: z
    .instanceof(Blob, { message: "The uploaded image is in the wrong format." })
    .refine(file => !!file, { message: "Image is required." })
    .refine(file => file.type.startsWith("image/"), {
      message: "The file you tried to upload is not an image.",
    }),
});
