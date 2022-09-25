// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAc41HH8YgEHf5GIcWUUJCYNVydOHMFAME",
  authDomain: "hpfarma-ecommerce.firebaseapp.com",
  projectId: "hpfarma-ecommerce",
  storageBucket: "hpfarma-ecommerce.appspot.com",
  messagingSenderId: "609966553261",
  appId: "1:609966553261:web:32d6701a8c0a4c5b346e24"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// db = database

//promise - Lo que hace es:
export const firestoreFetch = async (category) => {
  let q;
  if (category) {
    q = query(collection(db, "productos"), where("categoryId", "==", category)); //Traer docs where(donde) categoryId es == a category
  } else {
    q = query(collection(db, "productos")); //Traer todos los docs
  }
  const querySnapshot = await getDocs(q); //Consulta los datos que se les asigno a la variable q anteriormente
  const dataFromFS = querySnapshot.docs.map((doc) => ({
    //Conversion a array de objetos y le introducimos el id ya que por default esta por fuera del objeto.
    id: doc.id,
    ...doc.data(),
  }));
  return dataFromFS; //Retorna los datos.
};

export const singleFetch = async (id) => {
  const docRef = doc(db, "productos", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data()
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};










