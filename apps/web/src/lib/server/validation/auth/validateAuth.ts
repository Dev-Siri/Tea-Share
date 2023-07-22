import type { z } from "zod";

import formatSchemaErrors from "../errors";
import { loginSchema, signupSchema } from "./authSchema";

type AuthValidationResult<T extends "signup" | "login"> =
  | {
      success: true;
      data: T extends "signup" ? z.infer<typeof signupSchema> : z.infer<typeof loginSchema>;
    }
  | {
      success: false;
      errors: Record<string, string>;
    };

export function validateLoginSchema<T>(loginData: T): AuthValidationResult<"login"> {
  const loginValidationResult = loginSchema.safeParse(loginData);

  if (loginValidationResult.success) return loginValidationResult;

  const errorResponse = formatSchemaErrors(loginValidationResult.error);

  return { success: false, errors: errorResponse };
}

export function validateSignupSchema<T>(signupData: T): AuthValidationResult<"signup"> {
  const signupValidationResult = signupSchema.safeParse(signupData);

  if (signupValidationResult.success) return signupValidationResult;

  const errorResponse = formatSchemaErrors(signupValidationResult.error);

  return { success: false, errors: errorResponse };
}
