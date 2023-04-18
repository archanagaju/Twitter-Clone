import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCry01hbL8RaRvTtV0xKZsXzbGfdXXi9OQ",
  authDomain: "twitter-clone-b2e2f.firebaseapp.com",
  projectId: "twitter-clone-b2e2f",
  storageBucket: "twitter-clone-b2e2f.appspot.com",
  messagingSenderId: "173054487056",
  appId: "1:173054487056:web:b165f7ec31c4f8da8f7895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;