/*
use thư viện để xử lý các nhiệm vụ không phụ thuộc vào bên ngoài 

*/
type typeProduct ={
  title: string,
  description: string,
  price: number,
  stock: number,
  id: number,
  status: boolean,
}

// tìm index dựa vào id 
const findIndex = (id: number, arrayObject: []):number => {
  let indexcurrent:number=-1;
  arrayObject.map((procduct: any, index: number) => {
    if (procduct.id === id) {
      indexcurrent = index;
      return;
    }
  });
  return indexcurrent;
};

// tạo ra một sản phẩm mới có status 
const clonelistProducts = (listProducts: any) => {
  const cloneListProduct = listProducts.map((product: any) => {
    let objNews :typeProduct;
    objNews= {...product, status : product.status?true:false}
    return objNews;
  });
  return cloneListProduct;
};
// lấy object tạo ra một object mới với các thông số mong muốn
const cloneObj = (obj:any): typeProduct => {
  let newObject :typeProduct;
  newObject={...obj, status: obj.status?true:false}
  return newObject;
};

// get screen 
 const getWidthScreen =():number =>{
  return screen.width;
 }
 // tạo ra một chuỗi kí tự ngẫu nhiên
 // tạo một số từ [a,b]
 // tạo một số từ (a,b)
 // 
 export { findIndex, clonelistProducts, cloneObj ,getWidthScreen};