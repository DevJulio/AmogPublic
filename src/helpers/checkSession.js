import api from "../services/api";

const fetchData = async () => {
  const Email = localStorage.getItem("AMOG_EMAIL");
  const password = localStorage.getItem("AMOG_PASSWORD");
  if (Email && password) {
    const res = await api.post("/getAuth", {
      Email: atob(Email),
      password: atob(password),
    });
    if (res.data !== localStorage.getItem("userUID")) {
      return false;
    }
    return true;
  } else {
    return false;
  }
};
export default fetchData;
