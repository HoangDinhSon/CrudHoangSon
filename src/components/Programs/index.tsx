import { Fragment } from "react";
import Program from "./Program";
import Search from "./Search";
import { TableData } from "./TableDatas";
import { Footer } from "./Footer";
// export {default as  Program } from "./Program";
// export {default as  Search } from "./Search";
function Programs(props: any) {
  //vào
  const listProducts = props.listProducts;
  const valuePageNumber = props.valuePageNumber;
  const valueRowPerPage = props.valueRowPerPage;
  //ra
  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;

  return (
    <Fragment>
      <Program />
      <Search />
      <TableData
        listProducts={listProducts}
        valuePageNumber={valuePageNumber}
        valueRowPerPage={valueRowPerPage}
      />
      <Footer pageNumber={pageNumber} rowPerPage={rowPerPage} />
    </Fragment>
  );
}

export default Programs;
