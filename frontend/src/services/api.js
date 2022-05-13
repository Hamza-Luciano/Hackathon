import axios from "axios";

const api = axios.create({
  baseURL: "https://beta3.api.climatiq.io/",
});
api.defaults.headers.authorization = "Bearer CSZHDB0CZ4MWK3JF8GYN7TAGWRQ1";
export default api;
