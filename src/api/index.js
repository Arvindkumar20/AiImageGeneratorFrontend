import axios from "axios";
// http://localhost:8080/api/
const API = axios.create({
  // baseURL: "https://mern-image-generator.onrender.com/api",
  baseURL: "http://localhost:3000/api",
});
export const GetPosts = async () => await API.get("/post");
export const CreatePost = async (data) => await API.post("/post", data);
export const GenerateImageFromPrompt = async (data) =>
  await API.post("/generateImage", data);