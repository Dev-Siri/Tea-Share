import type { z } from "zod";

import formatSchemaErrors from "../errors";
import postFormSchema from "./postFormSchema";

type PostFormValidationResponse =
  | {
      success: true;
      data: z.infer<typeof postFormSchema>;
    }
  | {
      success: false;
      errors: Record<string, string>;
    };

export default function validatePostForm<T>(postFormData: T): PostFormValidationResponse {
  const postValidationResult = postFormSchema.safeParse(postFormData);

  if (postValidationResult.success) return postValidationResult;

  const errorResponse = formatSchemaErrors(postValidationResult.error);

  return { success: false, errors: errorResponse };
}
