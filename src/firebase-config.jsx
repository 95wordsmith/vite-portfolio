import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from '@firebase/storage'



// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID,
//   measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
// };

const firebaseConfig = {
  apiKey: "AIzaSyD57Vkuup3lpgQ8_-Li-WYq5RfxUBwe6eo",
  authDomain: "my-portfolio-1e271.firebaseapp.com",
  projectId: "my-portfolio-1e271",
  storageBucket: "my-portfolio-1e271.appspot.com",
  messagingSenderId: "1058992498791",
  appId: "1:1058992498791:web:71649043c40b7b500bccc2",
  measurementId: "G-7S7S2H3KFZ"
};


const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)