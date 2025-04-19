declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: import("$lib/types").User;
    }
    // interface PageData {}
    // interface Platform {}
  }

  interface Document {
    /**
     * Temporary type for view-transitions because there is still no official type for it.
     * defined in `src/app.d.ts`
     */
    startViewTransition(updateDOM: () => Promise<void>);
  }
}

export { };

