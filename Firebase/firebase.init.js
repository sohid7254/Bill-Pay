import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBIucepp_YR8NlxDL6QMT-ocruEBpf5kDE",
    authDomain: "assignment-10-3946c.firebaseapp.com",
    projectId: "assignment-10-3946c",
    storageBucket: "assignment-10-3946c.firebasestorage.app",
    messagingSenderId: "746733558273",
    appId: "1:746733558273:web:0de58c38deaf3501fffe00",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
