import defaultFirestore from "../../db/init-firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";

const auth = getAuth();

const getUser = async (uid) => {
  try {
    const q = query(
      collection(defaultFirestore, "users"),
      where("uid", "==", uid)
    );
    const querySnapshot = await getDocs(q);
    let res = [];
    querySnapshot.forEach((doc) => {
      res.push(doc.data());
    });
    return res;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

const handleLogin = (email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      auth.onAuthStateChanged(() => {
        if (userCredential.user) {
          // User is signed in.
          const user = auth.currentUser;
          localStorage.setItem("uid", user.uid);
        } else {
          // No user is signed in.
        }
      });
      return true;
    })
    .catch((error) => {
      return false;
    });
};

const logout = () => {
  auth
    .signOut()
    .then(function () {
      localStorage.removeItem("uid");
      // Sign-out successful.
    })
    .catch(function (error) {
      // An error happened.
    });
};

export { handleLogin, logout, getUser };
