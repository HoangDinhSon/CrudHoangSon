type InputEditForm = {
  title: string;
  description: string;
  price: number;
  stock: number;
  id: number;
  status: boolean;
};
type InputAddForm = {
  title: string;
  description: string;
  price: number;
  stock: number;
  status: boolean;
};
type outputAddForm = {
  title: string;
  description: string;
  price: number;
  stock: number;
  status: boolean;
};
// Mui config 
declare module "@mui/material/styles"{
  interface BreakpointOverides{
    xs:true,
    sm:true,
    md:false, 
    lg: true,
    xl : true,
    mobile :true,
    tablet:true,
    laptop: true,
    desktop:true,
  }
}


export type { InputEditForm, InputAddForm, outputAddForm };
