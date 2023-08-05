import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import {
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth/react-native";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyC4Ycvhrm53s2bGqh4WI0yw3_xb8QCwnT0",
  authDomain: "my-first-react-native-pr-f7c71.firebaseapp.com",
  databaseURL: "https://my-first-react-native-pr-f7c71.firebaseio.com",
  projectId: "my-first-react-native-pr-f7c71",
  storageBucket: "my-first-react-native-pr-f7c71.appspot.com",
  messagingSenderId: "539275086251",
  appId: "1:539275086251:android:e784c99944e7e501bf2aee",
  measurementId: "G-TEB87XBKX3",
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };

export const firestore = getFirestore(app);
