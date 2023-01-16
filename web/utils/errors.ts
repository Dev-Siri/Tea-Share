export default class Errors {
  public static mailAuth(error: string): string {
    switch (error.substring(16)) {
      case "(auth/email-already-exists).":
        return "The entered email is in use.";
      case "(auth/invalid-credential).":
        return "Entered info is not valid.";
      case "(auth/invalid-email).":
        return "Entered email is not valid.";
      case "(auth/user-not-found).":
        return "User not found.";
      case "(auth/invalid-display-name).":
        return "Username must be entered.";
      case "(auth/weak-password).":
        return "Password too weak.";
      default:
        return error;
    }
  }

  public static googleAuth(error: string): string {
    if (error.substring(16) === "(auth/popup-closed-by-user).") return "Google sign in popup was closed. Please check your popup blocker settings.";
    return error;
  }
}
