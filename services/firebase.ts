import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, getDocs } from "firebase/firestore";


const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_API_KEY,
  authDomain: process.env.EXPO_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.EXPO_PUBLIC_PROJECT_ID,
  storageBucket: process.env.EXPO_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.EXPO_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.EXPO_PUBLIC_APP_ID,
  measurementId: process.env.EXPO_PUBLIC_MEASUREMENTID
}
// const firebaseConfig = {}

console.log('fire', firebaseConfig)

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export async function getValueDB() {
  const query = await getDocs(collection(db, "favors"));
  console.log('query', query)
  query.forEach((i) => {
    console.log('i', i.data());
  })
}

export async function setValueDB(){
  try {
    console.log("setando valor no banco")
    const docRef = await addDoc(collection(db, 'favors'), {
      value: 5,
      status: "Completo",
      offedUser: "65465",
      dateCreate: "17/02/2025 15:00:00",
      dateCompleted: "18/02/2025 14:00:00",
      completedUser: "43fdv5343"
    })
    console.log("Document written with ID: ", docRef.id);
  } catch(e) {
    console.error("affs", e);
  }
}