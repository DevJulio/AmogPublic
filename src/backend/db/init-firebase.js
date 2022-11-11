
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from "firebase/app";

const firebaseConfig = {

};

const defaultProject = initializeApp(firebaseConfig);
const defaultFirestore = getFirestore(defaultProject);

export default defaultFirestore;