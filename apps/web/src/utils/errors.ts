export function googleAuthErrorFormater(error: string) {
  if (error.substring(16) === "(auth/popup-closed-by-user).") return "Google sign in popup was closed. Please check your popup blocker settings.";
  return error;
}
