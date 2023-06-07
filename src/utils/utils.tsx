import { useSearchParams } from "react-router-dom";
/*
lấy String trên thanh narbar 
*/
function useQueryString() {
  const [searchParams] = useSearchParams();
  const searchParamObject = Object.fromEntries([...searchParams]);
  return searchParamObject;
}

export default useQueryString;
