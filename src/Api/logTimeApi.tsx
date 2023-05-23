import axios from "axios";
import { axiosClient } from "./axiosClient";

const logTimeApi = {
  delete(id: any): Promise<any> {
    const url = `products/${id}`;
    return axiosClient.delete(url);
  },
  getAll: axiosClient
    .get(
      "https://dummyjson.com/products?limit=50&skip=0&select=title,price,id,description,stock"
    )
    .then((res) => {
      return res.data;
    }),
  updateByID: (data: any) =>
    axios.put(`https://dummyjson.com/products/${data.id}`, {
      title: data.title,
      description: data.description,
      price: data.price,
      stock: data.stock,
    }),
  addNewProduct: async (payload: any) => {
    const response = axios.post("https://dummyjson.com/products/add", {
      title: payload.title,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
    });
    return (await response).data;
  },
  getLimitAndSkip: async (limit: number) => {
    const response = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=0&select=title,price,id,description,stock`
    );
    return response.data;
  },
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
      })
  ,
};
export default logTimeApi;
