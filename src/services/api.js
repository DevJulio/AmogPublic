const axios = require("axios");
const api = axios.create({
  baseURL: 'http://localhost:3333/api'
  // baseURL: "http://amog-back.herokuapp.com/api",
});

export default api;
