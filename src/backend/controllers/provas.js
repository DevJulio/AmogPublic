import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import defaultFirestore from "../db/init-firebase";

const addProva = async (fields) => {
  const { Animal, Proprietario, Estado, Cidade, category, subCategory } =
    fields;
  try {
    const docRef = await addDoc(collection(defaultFirestore, "Provas"), {
      Animal,
      Proprietario,
      Estado,
      Cidade,
      category,
      subCategory,
      payed: false,
      online: true,
      date: new Date().toLocaleDateString("pt-br"),
    });
    localStorage.setItem("provaKey", docRef.id);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    alert("erro!");

    console.error("Error adding document: ", e);
  }
};

const updatePost = async (uid) => {
  // import { doc, getDoc } from "firebase/firestore";

  const docRef = doc(defaultFirestore, "blog", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

const updatePostToDb = async (fields) => {
  const uid = localStorage.getItem("postUid");
  const docref = doc(defaultFirestore, "blog", uid);
  try {
    await updateDoc(docref, {
      text: fields.text,
      title: fields.title,
      tags: fields.tags,
    });
    alert("Post atualizado com sucesso!");
  } catch (error) {
    alert("Erro ao atualizar o post");
  }
};

const listPosts = async () => {
  try {
    const q = query(
      collection(defaultFirestore, "blog"),
      where("online", "==", true)
    );
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
      res.push({ ...doc.data(), id: doc.id });
    });
    return res;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export { addProva, listPosts, updatePost, updatePostToDb };
