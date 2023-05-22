import { Fragment } from "react";
import Program from "./Program";
import Search from "./Search";
import { TableData } from "./TableDatas";
import { Footer } from "./Footer";
import { FormDelete, FormEdit, FormAddProduct } from "./FormNotify";

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
  const hiddenEditForm = props.hiddenEditForm;
  const productForEdit = props.productForEdit;
  const getProductAfterEdit = props.getProductAfterEdit;
  const isDisplayAddForm = props.isDisplayAddForm;
  const displayAddForm = props.displayAddForm;
  const hiddentAddForm = props.hiddentAddForm;
  const getPayLoadFromAddForm=props.getPayLoadFromAddForm;
  const handlePagination=props.handlePagination;
  //ra
  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;

  return (
    <Fragment>
      <Program />
      <Search displayAddForm={displayAddForm}  />
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
        handlePagination={handlePagination}
      />
      {isDisplayFormDelete && (
        <FormDelete
          hiddenFormDelete={hiddenFormDelete}
          deletePoduct={deletePoduct}
        />
      )}
      {isDisplayEditForm && (
        <FormEdit
          hiddenEditForm={hiddenEditForm}
          productForEdit={productForEdit}
          getProductAfterEdit={getProductAfterEdit}
        />
      )}
      {isDisplayAddForm && <FormAddProduct 
      getPayLoadFromAddForm={getPayLoadFromAddForm}
      hiddentAddForm={hiddentAddForm}
       />}
    </Fragment>
  );
}

export default Programs;
