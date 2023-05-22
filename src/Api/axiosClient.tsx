import axios from "axios";

const axiosClient =axios.create({
baseURL: "https://dummyjson.com/",
timeout: 2000,
})
export  {axiosClient}