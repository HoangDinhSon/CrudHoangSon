/*
input :id: number 
output: data, status ...
dependence : useQuery from react hook form
*/
import { useQuery } from "@tanstack/react-query";
import logTimeApi from "./logTimeApi";

function useDelete(id: number) {
  const resultOfUseQuery = useQuery({
    queryKey: ["delete", id],
    queryFn: async () => {
      const resAxios = await logTimeApi.delete(id);
      return resAxios.data;
    },
    enabled: !!id,
  });
  return { ...resultOfUseQuery };
}
/*
    input : number of all product
    output : 

*/
function useGetAllProducts(numbeOfProduct: number) {
  const resQuery = useQuery({
    queryKey: ["getListProduct", numbeOfProduct],
    queryFn: async () => {
      const resAxiosData = await logTimeApi.getLimitAndSkip(numbeOfProduct);
      return resAxiosData.products;
    },
  });
  return { ...resQuery };
}

export { useDelete, useGetAllProducts };
