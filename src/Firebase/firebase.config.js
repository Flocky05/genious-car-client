// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCoxTs6yMdzvPQ7c6TMhQuoiodJu9ci7hQ",
    authDomain: "genious-car-83cdd.firebaseapp.com",
    projectId: "genious-car-83cdd",
    storageBucket: "genious-car-83cdd.appspot.com",
    messagingSenderId: "317569051642",
    appId: "1:317569051642:web:4e41deefe70667059d1243",
    measurementId: "G-7K751R934Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;