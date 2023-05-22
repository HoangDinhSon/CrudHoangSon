const findIndex = (id: any, arrayObject: []) => {
  let indexcurrent;
  arrayObject.map((procduct: any, index: number) => {
    if (procduct.id === id) {
      indexcurrent = index;
      return;
    }
  });
  return indexcurrent;
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
    objNews.status = element.status ? true : false;
    return objNews;
  });
  return cloneListProduct;
};
// lấy object tạo ra một object mới với các thông số mong muốn

type typeObject = {
  title: string;
  description: string;
  price: number;
  stock: number;
  id: number;
  status: boolean;
};

const cloneObj = (obj: any): typeObject => {
  let newObject = {
    title: "",
    description: "",
    price: 0,
    stock: 0,
    id: 0,
    status: false,
  };
  newObject.title = obj.title;
  newObject.description = obj.description;
  newObject.price = obj.price;
  newObject.id = obj.id;
  newObject.stock = obj.stock;
  newObject.status = obj.status;
  return newObject;
};

export { findIndex, clonelistProducts, cloneObj, };
