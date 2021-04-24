import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:8080/api/fruits",
  headers: "application/json",
});
