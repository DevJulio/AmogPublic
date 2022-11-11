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

const addComitiva = async (fields) => {
  const {
    years,
    comitiva,
    Cidade,
    Comissario,
    membros,
    Email,
    Telefone,
    CPF,
    Baia,
  } = fields;
  try {
    const docRef = await addDoc(collection(defaultFirestore, "comitivas"), {
      years,
      comitiva,
      Cidade,
      Comissario,
      membros,
      Email,
      Telefone,
      CPF,
      Baia,
      payed: false,
      online: true,
      date: new Date().toLocaleDateString("pt-br"),
    });
    alert("Comitiva adicionada com sucesso!");
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    alert("erro!");

    console.error("Error adding document: ", e);
  }
};

const addTenda = async (fields) => {
  const {
    CPF,
    CPFVice,
    Comissario,
    vicePress,
    Tenda,
    Veiculo,
    Tamanho,
    Curral,
    Tipo,
    Produto,
    CpfCnpj,
    TelefoneComercial,
    Razao,
    animais,
    Telefone,
    ViceTelefone,
  } = fields;
  console.log(fields);
  try {
    const docRef = await addDoc(collection(defaultFirestore, "tendas"), {
      CPF: CPF ? CPF : "",
      CPFVice: CPFVice ? CPFVice : "",
      Comissario: Comissario ? Comissario : "",
      vicePress: vicePress ? vicePress : "",
      Tenda: Tenda ? Tenda : "",
      Veiculo: Veiculo ? Veiculo : "",
      Tamanho: Tamanho ? Tamanho : "",
      Curral: Curral ? Curral : false,
      Tipo: Tipo ? Tipo : "",
      Produto: Produto ? Produto : "",
      CpfCnpj: CpfCnpj ? CpfCnpj : "",
      TelefoneComercial: TelefoneComercial ? TelefoneComercial : "",
      Razao: Razao ? Razao : "",
      animais: animais ? animais : "",
      Telefone: Telefone ? Telefone : "",
      ViceTelefone: ViceTelefone ? ViceTelefone : "",
      online: true,
      payed: false,
      date: new Date().toLocaleDateString("pt-br"),
    });
    alert("Reserva de tenta adicionada com sucesso!");
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

export { addComitiva, listPosts, updatePost, updatePostToDb, addTenda };
