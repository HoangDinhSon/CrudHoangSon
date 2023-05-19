import Programs from "./components/Programs";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { number } from "yup";

const fetchData = async () => {
  const res = await fetch("https://dummyjson.com/products");
  return res.json();
};

function App() {
  const { data, status } = useQuery(["production"], fetchData);
  // kiểm tra định dạng . 
  if (status === "error") {
    return <div>fetching error</div>;
  }
  if (status === "loading") {
    return <div>loading.....</div>;
  }
  const listProducts = data.products;
  const[valuePageNumber,setPageNumber]=useState(1);
  const[valueRowPerPage ,setRowPerPage]=useState(10);

  const pageNumber =(pageNumber:number)=>{
    console.log("pageNumber",pageNumber);
    setPageNumber(pageNumber);
    
  }
  const rowPerPage = (rowPerPage:number)=>{
    console.log("rowPerPage",rowPerPage);
    setRowPerPage(rowPerPage)
  }
  
  const clonelistProducts = listProducts.map((element:any)=>{
    let objNews= {
      title:null,
      description:null,
      price:null,
      stock:null,
      id:null,
      status:false
    }
    objNews.title =element.title;
    objNews.description=element.description;
    objNews.price= element.price;
    objNews.stock= element.stock;
    objNews.id=element.id;
    objNews.status=false;
    return objNews;
  })
 
  return (
    <div className="wrap">
      <Programs
       listProducts = {clonelistProducts}
       pageNumber={pageNumber}
       rowPerPage={rowPerPage}
       valuePageNumber={valuePageNumber}
       valueRowPerPage={valueRowPerPage}
       />
    </div>
  );
}

export default App;
