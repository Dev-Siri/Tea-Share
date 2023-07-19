import type { z } from "zod";

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

const validatePostForm = <T>(postFormData: T): PostFormValidationResponse => {
  const postValidationResult = postFormSchema.safeParse(postFormData);

  if (postValidationResult.success) return postValidationResult;

  const errorResponse = postValidationResult.error.issues.reduce((res, error) => {
    const {
      path: [path],
      message,
    } = error;

    if (path && typeof path === "string") res[path] = message;
    return res;
  }, {} as Record<string, string>);

  return { success: false, errors: errorResponse };
};

export default validatePostForm;
