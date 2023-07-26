import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import {getStorage} from '@firebase/storage'


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