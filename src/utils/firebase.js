import { collection, addDoc, setDoc, doc, getDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
export async function insertCollection(collectionName, data) {

  try {
    await setDoc(doc(db, collectionName, data.userId), data);
  } catch (error) {
    console.log(error)
  }
}
export async function getCollection(collectionName, userId) {
  const docRef = doc(db, collectionName, userId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log("No such document!");
  }
}
