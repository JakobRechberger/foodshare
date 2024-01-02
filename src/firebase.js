// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBSkA0fIV6g7xKRT2agAZsM-xNNxHR9IM",
    authDomain: "foodshare-5da6e.firebaseapp.com",
    projectId: "foodshare-5da6e",
    storageBucket: "foodshare-5da6e.appspot.com",
    messagingSenderId: "508917413792",
    appId: "1:508917413792:web:0fd6706134c626e86656c5",
    measurementId: "G-X66HM6G159"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default app;
