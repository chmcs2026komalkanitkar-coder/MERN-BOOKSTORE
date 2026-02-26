import axios from "axios";
const api = axios.create({
    baseURL: 'https://mern-bookstore-5ita.onrender.com'
})

export default api
