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
  // viewpoint , response theo min 
const  VIEW_PORT ={
  xs: 0,
  sm: 413, // phone
  md: 601,  // tablets
  lg: 901, // small laptop
  xl: 1201,// desktop
  mobile:413,
  tablet:601,
  laptop:901,
  desktop:1400,
} 

const ID_FOR_DELETE = 0;
const NUMBER_OF_PRODUCTION_DEFAULT=100;

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
  ID_FOR_DELETE,
  NUMBER_OF_PRODUCTION_DEFAULT,
};
