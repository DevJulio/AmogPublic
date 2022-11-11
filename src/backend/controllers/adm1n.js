import { collection, query, where, getDocs, addDoc } from "firebase/firestore";
import defaultFirestore from "../db/init-firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const addImg = async (fields, file) => {
  if (fields.ticketName) {
    const storage = getStorage();
    const storageRef = ref(storage, "post_" + Math.random() * 100);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        // eslint-disable-next-line default-case
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        console.error(error);
        // Handle unsuccessful uploads
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addTicket(fields, downloadURL);
        });
      }
    );
  } else {
    alert("Verifique os campos e tente novamente");
  }
};

const addTicket = async (fields, downloadURL) => {
  try {
    const docRef = await addDoc(collection(defaultFirestore, "Ticket"), {
      ticketName: fields.ticketName,
      img: downloadURL,
      online: true,
      date: new Date().toLocaleDateString("pt-br"),
    });
    alert("Ingresso comprado com sucesso!");

    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    alert("erro!");

    console.error("Error adding document: ", e);
  }
};

const listComitivas = async () => {
  try {
    const q = query(
      collection(defaultFirestore, "comitivas"),
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
const listTendas = async () => {
  try {
    const q = query(
      collection(defaultFirestore, "tendas"),
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
const listProvas = async () => {
  try {
    const q = query(
      collection(defaultFirestore, "Provas"),
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
export { listComitivas, listTendas, listProvas, addImg };
