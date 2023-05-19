import { Fragment } from "react";
import Program from "./Program";
import Search from "./Search";
import { TableData } from "./TableDatas";
import { Footer } from "./Footer";
import { FormDelete, FormEdit } from "./FormNotify";

// export {default as  Program } from "./Program";
// export {default as  Search } from "./Search";
function Programs(props: any) {
  //vào
  const listProducts = props.listProducts;
  const valuePageNumber = props.valuePageNumber;
  const valueRowPerPage = props.valueRowPerPage;
  const displayFromDelete = props.displayFromDelete;
  const hiddenFormDelete = props.hiddenFormDelete;
  const isDisplayFormDelete = props.isDisplayFormDelete;
  const deletePoduct = props.deletePoduct;
  const isDisplayEditForm = props.isDisplayEditForm;
  const displayEditForm = props.displayEditForm;
  //ra
  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;

  return (
    <Fragment>
      <Program />
      <Search />
      <TableData
        displayFromDelete={displayFromDelete}
        listProducts={listProducts}
        valuePageNumber={valuePageNumber}
        valueRowPerPage={valueRowPerPage}
        displayEditForm={displayEditForm} 
      />
      <Footer
        pageNumber={pageNumber}
        rowPerPage={rowPerPage}
        listProducts={listProducts}
      />
      {isDisplayFormDelete && (
        <FormDelete
          hiddenFormDelete={hiddenFormDelete}
          deletePoduct={deletePoduct}
        />
      )}
      {isDisplayEditForm && <FormEdit />}
    </Fragment>
  );
}

export default Programs;
