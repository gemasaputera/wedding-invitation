import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: "AIzaSyDqpjDtCC7Wy1yneMulWCafeehM9kkgufI",
  authDomain: "digital-invitation-74e38.firebaseapp.com",
  projectId: "digital-invitation-74e38",
  storageBucket: "digital-invitation-74e38.appspot.com",
  messagingSenderId: "523286749072",
  appId: "1:523286749072:web:55a5cdfe5fce67e7a39d15",
};

const app = initializeApp(config);

export const db = getFirestore(app);
