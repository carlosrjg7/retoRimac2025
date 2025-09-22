import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL ||
    "https://rimac-front-end-challenge.netlify.app/api",
});

export default api;
