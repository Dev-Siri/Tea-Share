import type { z } from "zod";

import formatSchemaErrors from "../errors";
import commentSchema from "./commentSchema";

type CommentValidationResponse =
  | {
      success: true;
      data: z.infer<typeof commentSchema>;
    }
  | {
      success: false;
      errors: Record<string, string>;
    };

export default function validateComment<T>(commentData: T): CommentValidationResponse {
  const commentValidationResult = commentSchema.safeParse(commentData);

  if (commentValidationResult.success) return commentValidationResult;

  const errorResponse = formatSchemaErrors(commentValidationResult.error);

  return { success: false, errors: errorResponse };
}
