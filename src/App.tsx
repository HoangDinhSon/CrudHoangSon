import { useState, useEffect } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { LinearProgress, Alert } from "@mui/material";
import Programs from "./components/Programs";
import toast, { Toaster } from "react-hot-toast";

import { findIndex, clonelistProducts, cloneObj } from "./handle-logic";
import {
  VALUE_PAGE_NUMBER,
  VALUE_ROW_PER_PAGE,
  IS_DISPLAY_DELETE_FORM,
  IS_DISPLAY_EDIT_fORM,
  ID_FOR_UPDATE,
  IS_DISPLAY_ADD_FORM,
  STATUS_FOR_NEW_PRODUCT,
  SEARCH_KEY_WORD,
  ID_AND_STATUS_fORMVIEW,
} from "./const";
import { InputEditForm, outputAddForm } from "./type";
import logTimeApi from "./Api/logTimeApi";
function App() {
  const [flagSearch, setFlagSearch] = useState(false);
  const [idForDelete, setIdForDelete] = useState();
  const [searchKeyWord, setSearchKeyWord] = useState(SEARCH_KEY_WORD);
  const [idForProductUpdate, setIDForProductUpdate] = useState(ID_FOR_UPDATE);
  const [statusForProduct, setStatusForProduct] = useState(false);
  const [statusForNewProduct, setStatusForNewProduct] = useState(
    STATUS_FOR_NEW_PRODUCT
  );
  const [idAndStatusForView, setIdAndStatusForView] = useState(
    ID_AND_STATUS_fORMVIEW
  );
  // hiển thị data trên table
  const [valuePageNumber, setPageNumber] = useState(VALUE_PAGE_NUMBER);
  const [valueRowPerPage, setRowPerPage] = useState(VALUE_ROW_PER_PAGE);
  // hiển thị /ẩn / xóa  form Delete
  const [isDisplayFormDelete, setIsDisplayFormDelete] = useState(
    IS_DISPLAY_DELETE_FORM
  );
  // hiển thị form , editForm ,
  const [isDisplayEditForm, setIsDisplayEditForm] =
    useState(IS_DISPLAY_EDIT_fORM);
  const [productForEdit, setProductForEdit] = useState({});
  // hidden/diaplay Addform
  const [isDisplayAddForm, setIsDisplayAddForm] = useState(IS_DISPLAY_ADD_FORM);
  // hiddent /display ViewForm
  const [isDisplayVieForm, setIsDisPlayViewForm] = useState(false);
  // get All
  const queryResponse = useQuery({
    queryKey: ["products"],
    queryFn: () => logTimeApi.getAll,
    onSuccess: () => {
      toast.success("WellCome");
    },
    onError: () => {
      toast.error("Something Wrong");
    },
  });
  const data = queryResponse.data;
  const statusQuery = queryResponse.status;
  //get limit and Skip
  const queryGetLimitSkip = useQuery({
    queryKey: ["products"],
    queryFn: () => logTimeApi.getLimitAndSkip,
  });
  const queryDeleteProcduct = useMutation({
    mutationFn: (id: any) => logTimeApi.delete(id),
    onSuccess: (res) => {
      let index = findIndex(res.data.id, data.products);
      data.products.splice(index, 1);
      toast.success("Delete complited");
    },
    onError: () => {
      toast.error("!Delete, Something wrong you can't delete ");
    },
  });

  const queryUpdateProcduct = useMutation({
    mutationFn: logTimeApi.updateByID,
    onSuccess: (dataFrommutation) => {
      toast.success("Update Complited");
      const idProductForUpdate = dataFrommutation.data.id;
      const index = findIndex(idProductForUpdate, data.products);
      if (index != undefined) {
        data.products[index].title = dataFrommutation.data.title;
        data.products[index].description = dataFrommutation.data.description;
        data.products[index].price = dataFrommutation.data.price;
        data.products[index].stock = dataFrommutation.data.stock;
        data.products[index].status = statusForProduct;
      }
    },
    onError: () => {
      toast.error("SomeThing Wrong");
    },
  });
  const queryAddProduct = useMutation({
    mutationFn: logTimeApi.addNewProduct,
    onSuccess: (dataFromAddResponse) => {
      toast.success("Add Product Complited");
      data.products.unshift({
        title: dataFromAddResponse.title,
        description: dataFromAddResponse.description,
        price: dataFromAddResponse.price,
        stock: dataFromAddResponse.stock,
        id: dataFromAddResponse.id,
        status: statusForNewProduct,
      });
    },
    onError: () => {
      toast.error("SomeThing Wrong");
    },
  });
  //Search
  const querySearchProduct = useQuery({
    queryKey: ["search", searchKeyWord],
    queryFn: () => logTimeApi.searchProduct(searchKeyWord),
    onSuccess: (responseAfterSuccess) => {
     
      if (searchKeyWord) {
        setFlagSearch(true);
        data.products = responseAfterSuccess.products;
      }
    },
    onError: () => {
     toast.error("Error")
    },
  });
  const queryGetAllProductForSearch = useQuery({
    queryKey: ["getAllProduct"],
    queryFn: () => logTimeApi.getAllProductsForSearch(),
  });
  useEffect(() => {
    if (searchKeyWord.length == 0 && flagSearch) {
      data.products = queryGetAllProductForSearch.data.products;
    }
  }, [searchKeyWord]);

  // hiển thị /ẩn / xóa  form Delete
  const displayFromDelete = (id: any) => {
    setIdForDelete(id);
    setIsDisplayFormDelete(() => true);
  };
  const hiddenFormDelete = () => {
    setIsDisplayFormDelete(() => false);
  };
  const deletePoduct = () => {
    queryDeleteProcduct.mutate(idForDelete);
  };
  // hiển thị form , editForm
  const displayEditForm = (id: number, status: boolean) => {
    setIDForProductUpdate(id);
    setIsDisplayEditForm(true);
    const indexProduct: any = findIndex(id, data.products);
    setProductForEdit({ ...data.products[indexProduct], status: status });
  };
  const hiddenEditForm = () => {
    setIsDisplayEditForm(false);
  };
  const getProductAfterEdit = (getProducFromEditForm: InputEditForm) => {
    setStatusForProduct(getProducFromEditForm.status);
    queryUpdateProcduct.mutate({
      ...getProducFromEditForm,
      id: idForProductUpdate,
    });
  };
  // hiddent / display Add form Product.
  const displayAddForm = () => {
    setIsDisplayAddForm(true);
  };
  const hiddentAddForm = () => {
    setIsDisplayAddForm(false);
  };
  const getPayLoadFromAddForm = (payload: outputAddForm) => {
    setStatusForNewProduct(payload.status);
    queryAddProduct.mutate({
      title: payload.title,
      description: payload.description,
      price: payload.price,
      stock: payload.stock,
    });
  };
  // Search
  const getDataFromSearch = (payloadSearch: any) => {
    setSearchKeyWord(payloadSearch);
    // console.log(querySearchProduct.data?.data.products);
  };
  // view Form
  const displayAndPutDataForFormView = (
    id: number,
    status: boolean,
    title: string,
    price: number,
    description: string,
    stock: number
  ) => {
    setIdAndStatusForView({
      id: id,
      status: status,
      title: title,
      price: price,
      description: description,
      stock: stock,
    });
    setIsDisPlayViewForm(true);
  };
  const hiddenViewForm = () => {
    setIsDisPlayViewForm(false);
  };

  // kiểm tra định dạng .

  const pageNumber = (pageNumber: number) => {
    setPageNumber(pageNumber);
  };
  const rowPerPage = (rowPerPage: number) => {
    setRowPerPage(rowPerPage);
  };
  const handlePagination = (rowPerPage: number, pageNumber: number) => {};

  return (
    <div className="wrap">
      <Toaster />
      {statusQuery === "loading" && <LinearProgress />}
      {statusQuery === "error" && <Alert>Disconnect Network</Alert>}
      {statusQuery === "success" && (
        <Programs
          listProducts={clonelistProducts(data.products)}
          pageNumber={pageNumber}
          rowPerPage={rowPerPage}
          valuePageNumber={valuePageNumber}
          valueRowPerPage={valueRowPerPage}
          displayFromDelete={displayFromDelete}
          hiddenFormDelete={hiddenFormDelete}
          isDisplayFormDelete={isDisplayFormDelete}
          deletePoduct={deletePoduct}
          isDisplayEditForm={isDisplayEditForm}
          displayEditForm={displayEditForm}
          hiddenEditForm={hiddenEditForm}
          productForEdit={cloneObj(productForEdit)}
          getProductAfterEdit={getProductAfterEdit}
          isDisplayAddForm={isDisplayAddForm}
          displayAddForm={displayAddForm}
          hiddentAddForm={hiddentAddForm}
          getPayLoadFromAddForm={getPayLoadFromAddForm}
          handlePagination={handlePagination}
          getDataFromSearch={getDataFromSearch}
          displayAndPutDataForFormView={displayAndPutDataForFormView}
          hiddenViewForm={hiddenViewForm}
          isDisplayVieForm={isDisplayVieForm}
          idAndStatusForView={idAndStatusForView}
        />
      )}
    </div>
  );
}

export default App;
