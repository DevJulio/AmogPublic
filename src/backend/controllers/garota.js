import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import defaultFirestore from "../db/init-firebase";

const addVoto = async () => {
  alert("Votações encerradas!");
};
// function isAnon() {
//     var fs = window.RequestF || window.webkitRequestFileSystem;
//     if (!fs) {
//         // result.textContent = "check failed?";
//         return;
//     }
//     fs(window.TEMPORARY, 100, function (fs) {
//         // result.textContent = "it does not seem like you are in incognito mode";
//         return true
//     }, function (err) {
//         return false
//         // result.textContent = "it seems like you are in incognito mode";
//     });
// }

// const isAnon = async () => {
// var fs = window.RequestFileSystem || window.webkitRequestFileSystem;
// if (!fs) {
//     alert("check failed?");
//     return;
// }
// fs(window.TEMPORARY, 100, function (fs) {
//     alert("it does not seem like you are in incognitomode");
// }, function (err) {
//     alert("it seems like you are in incognito mode")
// });
// }

const getGarota = async (id) => {
  try {
    const docRef = doc(defaultFirestore, "garota", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      alert("ID selecionado inválido");
      console.log("No such document!");
    }
  } catch (e) {
    alert("ID selecionado inválido");
  }
};
const getState = async (id) => {
  try {
    const docRef = doc(defaultFirestore, "resultados", "mostrar");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      // doc.data() will be undefined in this case
      alert("ID selecionado inválido");
      console.log("No such document!");
    }
  } catch (e) {
    alert("ID selecionado inválido");
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

const listGarota = async () => {
  try {
    const q = query(
      collection(defaultFirestore, "garota"),
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

export { addVoto, listGarota, updatePost, updatePostToDb, getGarota, getState };
