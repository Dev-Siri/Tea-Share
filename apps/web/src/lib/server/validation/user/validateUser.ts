import userSchema from "./userSchema";

export default function validateUser<T>(user: T) {
  const { success } = userSchema.safeParse(user);

  return success;
}
