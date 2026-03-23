import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAabNEW2zgZn8VmsRdmg6BkdBGQTDYxSgw",
  authDomain: "ttc-reality-check.firebaseapp.com",
  projectId: "ttc-reality-check",
  storageBucket: "ttc-reality-check.firebasestorage.app",
  messagingSenderId: "256731031219",
  appId: "1:256731031219:web:98dd2e8d973969167bb2c6"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
