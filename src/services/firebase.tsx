import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBVLEBCQwnkj_aM8r6Wqf2-jaw8nsB2_tc",
  authDomain: "crystal-v2.firebaseapp.com",
  projectId: "crystal-v2",
  storageBucket: "crystal-v2.appspot.com",
  messagingSenderId: "578090432613",
  appId: "1:578090432613:web:136aec4888061a10186e8c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {app,db,auth}