import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schemaForAddForm = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().required(),
  stock: yup.number().required(),
  status: yup.boolean().required() ,
});
const shemaForEditForm = yup.object({
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
    stock: yup.number().required(),
    status: yup.boolean() ,
})

const resolverForAddForm = {
  resolver: yupResolver(schemaForAddForm),
};

const resolverForEditForm={
    resolver: yupResolver(shemaForEditForm),
}
export  {resolverForAddForm,resolverForEditForm};
