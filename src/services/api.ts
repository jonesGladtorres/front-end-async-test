import axios from "axios";

export const api = axios.create({
    baseURL: "https://front-end-async-test-snowy.vercel.app",
    timeout: 8000
})