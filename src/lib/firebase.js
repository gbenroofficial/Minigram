import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import "firebase/compat/auth";
// import { collection, addDoc } from "firebase/firestore";
// eslint-disable-next-line no-unused-vars
import { seedData } from "../seed";

// eslint-disable-next-line prettier/prettier

//define configuration settings for firebase app
const config = {
  apiKey: "AIzaSyDdQg5OfDOhD_1wQGsYbf_QSqGF8EeDCdQ",
  authDomain: "instagram-do-267c4.firebaseapp.com",
  projectId: "instagram-do-267c4",
  storageBucket: "instagram-do-267c4.appspot.com",
  messagingSenderId: "441388863141",
  appId: "1:441388863141:web:b63a87acec6e1d31cd074c",
};

//initialize/create instance of firebase app using defined configurations
const firebase = initializeApp(config);
// eslint-disable-next-line no-unused-vars
const auth = getAuth(firebase);
// console.log(auth);
const db = getFirestore(firebase);

/* try {
  const docRef = addDoc(collection(db, "users"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815,
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
} */

//seedData into firebase
// seedData(db);

// console.log("db", db);

export { auth, firebase, db };
