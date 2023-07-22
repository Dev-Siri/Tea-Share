declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: import("$lib/types").User;
    }
    // interface PageData {}
    // interface Platform {}
  }
}

export {};
