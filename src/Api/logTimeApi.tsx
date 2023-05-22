import axios from "axios";
import { axiosClient } from "./axiosClient";

const logTimeApi = {
  delete(id: any): Promise<any> {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
  getAll: axiosClient.get("https://dummyjson.com/products").then((res) => {
    return res.data;
  }),
  updateByID: (data:any)=>axios
  .put(`https://dummyjson.com/products/${data.id}`, {
    title: data.title,
    description: data.description,
    price: data.price,
    stock: data.stock,
  }),
  addNewProduct : async (payload:any)=>{
   const response =  axios.post("https://dummyjson.com/products/add", {
      title: payload.title,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
    })
    return (await response ).data
  },
  getLimitAndSkip : async (limit :number , skip :number)=>{
      const response =   axios.post(`https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`,{
        limit:limit,
        skip:skip
      });
      return (await response).data;
  }
};
export default logTimeApi;

