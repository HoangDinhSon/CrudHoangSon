const VALUE_PAGE_NUMBER: number = 1;
const VALUE_ROW_PER_PAGE: number = 5;
const IS_DISPLAY_EDIT_fORM: boolean = false;
const IS_DISPLAY_DELETE_FORM: boolean = false;
const ID_FOR_UPDATE = 1;
const IS_DISPLAY_ADD_FORM = false;
const SEARCH_KEY_WORD ="";
const DATA_RESPONSE_INITIAL = {
  products:{
    title: "",
    description: "",
    price: 1,
    stock: 1,
    status: false,
  },
}
const PAYLOAD_ADD_FORM_INITIAL = {
  title: "",
  description: "",
  price: 1,
  stock: 1,
  status: false,
};
const STATUS_FOR_NEW_PRODUCT =false;
const ID_AND_STATUS_fORMVIEW = { 
  id : -1 ,
   status :false, 
   title:"",
   stock:0,
   price:0,
   description:""
  }
  // viewpoint 
const  VIEW_PORT  ={
  xs: 0,
  sm: 376, // phone
  md: 601,  // tablets
  lg: 901, // small laptop
  xl: 1201,// desktop
} 

export {
  VALUE_PAGE_NUMBER,
  VALUE_ROW_PER_PAGE,
  IS_DISPLAY_EDIT_fORM,
  IS_DISPLAY_DELETE_FORM,
  ID_FOR_UPDATE,
  IS_DISPLAY_ADD_FORM,
  STATUS_FOR_NEW_PRODUCT,
  SEARCH_KEY_WORD,
  DATA_RESPONSE_INITIAL,
  ID_AND_STATUS_fORMVIEW,
  VIEW_PORT,
};
