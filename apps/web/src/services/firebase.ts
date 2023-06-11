import { env } from "$env/dynamic/public";
import { initializeApp, type FirebaseOptions } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig: FirebaseOptions = {
  apiKey: env.PUBLIC_FIREBASE_API_KEY,
  authDomain: env.PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: env.PUBLIC_FIREBASE_DATABASE_URL,
  projectId: env.PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.PUBLIC_FIREBASE_MESSAGE_SENDER_ID,
  appId: env.PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig, "Tea Share");
export const auth = getAuth(app);
export const storage = getStorage(app);
