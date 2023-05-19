import axios from "axios";
import { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import Programs from "./components/Programs";
// getdata
const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

function App() {
  const [id, setId] = useState();
  const queryGetAll = useQuery(["production"], fetchData);
  const queryDeleteProcduct = useMutation({
    mutationFn: (id) => {
      return axios.delete(`https://dummyjson.com/products/${id}`);
    },
  });
  const data = queryGetAll.data;
  const status = queryGetAll.status;

  // hiển thị data trên table
  const [valuePageNumber, setPageNumber] = useState(1);
  const [valueRowPerPage, setRowPerPage] = useState(10);
  // hiển thị /ẩn / xóa  form Delete
  const [isDisplayFormDelete, setIsDisplayFormDelete] = useState(false);
  const displayFromDelete = (id: any) => {
    setId(id);
    setIsDisplayFormDelete(() => true);
  };
  const hiddenFormDelete = () => {
    setIsDisplayFormDelete(() => false);
  };
  const deletePoduct = () => {
    queryDeleteProcduct.mutate(id);
    // tìm index
    const index: number = data.products.map((procduct: any, index: number) => {
      if (procduct.id === id) {
        return index;
      }
    });
    data.products.splice(index, 1);
  };
  // hiển thị form , edit , 
  const [isDisplayEditForm, setIsDisplayEditForm]= useState(false);
 const displayEditForm = (id:number)=>{
  setIsDisplayEditForm(true);
  console.log(id);
  
 }

  // kiểm tra định dạng .

  const pageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const rowPerPage = (rowPerPage: number) => {
    console.log("check", rowPerPage);

    setRowPerPage(rowPerPage);
  };

  const clonelistProducts = (listProducts: any) => {
    const cloneListProduct = listProducts.map((element: any) => {
      let objNews = {
        title: null,
        description: null,
        price: null,
        stock: null,
        id: null,
        status: false,
      };
      objNews.title = element.title;
      objNews.description = element.description;
      objNews.price = element.price;
      objNews.stock = element.stock;
      objNews.id = element.id;
      objNews.status = false;
      return objNews;
    });
    return cloneListProduct;
  };

  return (
    <div className="wrap">
      {status === "loading" && <p>Fetching data...</p>}
      {status === "error" && <p>Error fetching data</p>}
      {status === "success" && (
        <Programs
          listProducts={clonelistProducts(data.products)} //data.products
          pageNumber={pageNumber}
          rowPerPage={rowPerPage}
          valuePageNumber={valuePageNumber}
          valueRowPerPage={valueRowPerPage}
          displayFromDelete={displayFromDelete}
          hiddenFormDelete={hiddenFormDelete}
          isDisplayFormDelete={isDisplayFormDelete}
          deletePoduct={deletePoduct}
          isDisplayEditForm={isDisplayEditForm}
          displayEditForm={displayEditForm}
          
        />
      )}
    </div>
  );
}

export default App;
