import axios from "axios";
import { axiosClient } from "./axiosClient";

const logTimeApi = {
  getAll: axiosClient
    .get(
      "https://dummyjson.com/products?limit=50&skip=0&select=title,price,id,description,stock"
    )
    .then((res) => {
      return res.data;
    }),
  getLimitAndSkip: async (limit: number) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=0&select=title,price,id,description,stock`
    );
    return response.data;
  },
  getAllProductsForSearch : ()=>axios.get("https://dummyjson.com/products?limit=50").then((res)=>{
    return res.data
  }) ,
  searchProduct: async (searchData: any) => {
    const response = await axios.get(
      `https://dummyjson.com/products/search?q=${searchData}`
    );
    return response.data;
  },
  getSingleProduct: (idProduct: number) =>
    axios
      .get(`https://dummyjson.com/products/${idProduct}`)
      .then((response) => {
        return response.data;
      }),
      // ok
  updateByID: (data: any) =>
    axios.put(`https://dummyjson.com/products/${data.id}`, {
      title: data.title,
      description: data.description,
      price: data.price,
      stock: data.stock,
    }),
  addNewProduct: async (payload: any) => {
    const response = await  axios.post("https://dummyjson.com/products/add", {
      title: payload.title,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
    });
    return response.data;
  },
  delete(id: any): Promise<any> {
    const url = `products/${id}`;
    const res= axiosClient.delete(url);
    return res;
    
  },
  getAProduct: (id:any)=>  axios.get(`https://dummyjson.com/products/${id}`).then((res)=>(res.data))
    
  
  
};
export default logTimeApi;
