import type { ZodError } from "zod";

export default function formatSchemaErrors(error: ZodError) {
  return error.issues.reduce((res, error) => {
    const {
      path: [path],
      message,
    } = error;

    if (path && typeof path === "string") res[path] = message;
    return res;
  }, {} as Record<string, string>);
}
