import Search from "./Search";
import { TableData } from "./TableDatas";
import { Footer } from "./Footer";
import { FormDelete, FormEdit, FormAddProduct, FormView } from "./FormNotify";

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
  const getPayLoadFromAddForm = props.getPayLoadFromAddForm;
  const handlePagination = props.handlePagination;
  const getDataFromSearch = props.getDataFromSearch;
  const displayAndPutDataForFormView = props.displayAndPutDataForFormView;
  const hiddenViewForm = props.hiddenViewForm;
  const isDisplayVieForm = props.isDisplayVieForm;
  const idAndStatusForView=props.idAndStatusForView;
  //ra
  const pageNumber = props.pageNumber;
  const rowPerPage = props.rowPerPage;

  return (
    <div>
      <Search
        displayAddForm={displayAddForm}
        getDataFromSearch={getDataFromSearch}
      />
      <TableData
        displayFromDelete={displayFromDelete}
        listProducts={listProducts}
        valuePageNumber={valuePageNumber}
        valueRowPerPage={valueRowPerPage}
        displayEditForm={displayEditForm}
        displayAndPutDataForFormView={displayAndPutDataForFormView}
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
      {isDisplayAddForm && (
        <FormAddProduct
          getPayLoadFromAddForm={getPayLoadFromAddForm}
          hiddentAddForm={hiddentAddForm}
        />
      )}
      {isDisplayVieForm && <FormView hiddenViewForm={hiddenViewForm} 
      idAndStatusForView={idAndStatusForView}
      displayEditForm={displayEditForm}
      />}
    </div>
  );
}

export default Programs;
