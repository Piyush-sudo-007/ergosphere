import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
});

// export const getBooks = () => API.get("/books/");
// export const getBook = (id) => API.get(`/books/${id}/`);
// export const askQuestion = (question) => API.post("/ask/", { question });

export default API;
