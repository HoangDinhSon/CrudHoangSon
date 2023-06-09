import { Search, TableData, Footer, FormDelete, FormEdit, FormAddProduct, FormView } from '../components/Programs';
import { useState, useEffect } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import toast, { Toaster } from 'react-hot-toast';
import { findIndex, clonelistProducts, cloneObj } from '../handle-logic';
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
} from '../const';
import { InputEditForm, outputAddForm } from '../type';
import logTimeApi from '../Api/logTimeApi';
const KEY_FOR_DELETE_SUCCESS = -1;
function Program() {
    const [flagSearch, setFlagSearch] = useState(false);
    const [searchKeyWord, setSearchKeyWord] = useState(SEARCH_KEY_WORD);
    //delete
    const [idForDelete, setIdForDelete] = useState(KEY_FOR_DELETE_SUCCESS);
    const [keyWhenDeleteSuccess, setKeyWhenDeleteSuccess] = useState(KEY_FOR_DELETE_SUCCESS);
    const [isDisplayFormDelete, setIsDisplayFormDelete] = useState(IS_DISPLAY_DELETE_FORM);
    //update
    const [idForProductUpdate, setIDForProductUpdate] = useState(ID_FOR_UPDATE);
    const [statusForProduct, setStatusForProduct] = useState(false);
    // view 
    const [statusForNewProduct, setStatusForNewProduct] = useState(STATUS_FOR_NEW_PRODUCT);
    const [idAndStatusForView, setIdAndStatusForView] = useState(ID_AND_STATUS_fORMVIEW);
    const [valuePageNumber, setPageNumber] = useState(VALUE_PAGE_NUMBER);
    const [valueRowPerPage, setRowPerPage] = useState(VALUE_ROW_PER_PAGE);
    const [isDisplayEditForm, setIsDisplayEditForm] = useState(IS_DISPLAY_EDIT_fORM);
    const [productForEdit, setProductForEdit] = useState({});
    const [isDisplayAddForm, setIsDisplayAddForm] = useState(IS_DISPLAY_ADD_FORM);
    const [isDisplayVieForm, setIsDisPlayViewForm] = useState(false);

    // get All
    const queryResponse = useQuery({
        queryKey: ['products', ],
        queryFn: () => logTimeApi.getAll,
        staleTime:0,// default của chương trình 
        cacheTime:50000,// default chương trình 
        onSuccess: () => {
           
        },
        onError: () => {},
    });
    const data = queryResponse.data;
    const statusQuery = queryResponse.status;
    // Delete
    const queryDeleteProcduct = useMutation({
        mutationFn: (id: any) => logTimeApi.delete(id),
        onSuccess: (res) => {
            setKeyWhenDeleteSuccess(idForDelete);
            let index = findIndex(res.data.id, data.products);
            data.products.splice(index, 1);
            toast.success('Delete complited ');
        },
        onError: () => {
            toast.error("Something wrong you can't delete ");
        },
    });
    // Update
    const queryUpdateProcduct = useMutation({
        mutationFn: logTimeApi.updateByID,
        onSuccess: (dataFrommutation) => {
            toast.success('Update Complited');
            const idProductForUpdate = dataFrommutation.data.id;
            const index = findIndex(idProductForUpdate, data.products);
            if (index != -1) {
                data.products[index].title = dataFrommutation.data.title;
                data.products[index].description = dataFrommutation.data.description;
                data.products[index].price = dataFrommutation.data.price;
                data.products[index].stock = dataFrommutation.data.stock;
                data.products[index].status = statusForProduct;
            }
        },
        onError: () => {
            toast.error('SomeThing Wrong');
        },
    });
    // Add Products
    const queryAddProduct = useMutation({
        mutationFn: logTimeApi.addNewProduct,
        onSuccess: (dataFromAddResponse) => {
            toast.success('Add Product Complited');
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
            toast.error('SomeThing Wrong');
        },
    });
    //Search
    const querySearchProduct = useQuery({
        queryKey: ['search', searchKeyWord],
        queryFn: () => logTimeApi.searchProduct(searchKeyWord),
        enabled:!!searchKeyWord ,
        onSuccess: (responseAfterSuccess) => {
            if (searchKeyWord) {
                setFlagSearch(true);
                data.products = responseAfterSuccess.products;
            }
        },
        onError: () => {
            toast.error('Error');
        },
    });

    const queryGetAllProductForSearch = useQuery({
        queryKey: ['getAllProductForSearch'],
        queryFn: () => logTimeApi.getAllProductsForSearch(),
    });
    useEffect(() => {
        if (searchKeyWord.length == 0 && flagSearch) {
            data.products = queryGetAllProductForSearch.data.products;
        }
    }, [searchKeyWord]);

    // hiển thị /ẩn / xóa  form Delete
    const displayFromDelete = (id: any) => {
        console.log('id For delete>>>', id);

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
        stock: number,
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
    //lấy pageNumber và rowperpage
    const pageNumber = (pageNumber: number) => {
        setPageNumber(pageNumber);
    };
    const rowPerPage = (rowPerPage: number) => {
        setRowPerPage(rowPerPage);
    };

    return (
        <div className="wrap">
            <Toaster />
            {statusQuery === 'loading' && <div>loading....</div>}
            {statusQuery === 'error' && <div>error</div>}
            {statusQuery === 'success' && (
                <div>
                    <Search displayAddForm={displayAddForm} getDataFromSearch={getDataFromSearch} />
                    <TableData
                        displayFromDelete={displayFromDelete}
                        listProducts={clonelistProducts(data.products)}
                        valuePageNumber={valuePageNumber}
                        valueRowPerPage={valueRowPerPage}
                        displayEditForm={displayEditForm}
                        displayAndPutDataForFormView={displayAndPutDataForFormView}
                    />
                    <Footer
                        pageNumber={pageNumber}
                        rowPerPage={rowPerPage}
                        listProducts={clonelistProducts(data.products)}
                        keyWhenDeleteSuccess={keyWhenDeleteSuccess}
                    />
                    {isDisplayFormDelete && (
                        <FormDelete hiddenFormDelete={hiddenFormDelete} deletePoduct={deletePoduct} />
                    )}
                    {isDisplayEditForm && (
                        <FormEdit
                            hiddenEditForm={hiddenEditForm}
                            productForEdit={cloneObj(productForEdit)}
                            getProductAfterEdit={getProductAfterEdit}
                        />
                    )}
                    {isDisplayAddForm && (
                        <FormAddProduct getPayLoadFromAddForm={getPayLoadFromAddForm} hiddentAddForm={hiddentAddForm} />
                    )}
                    {isDisplayVieForm && (
                        <FormView
                            hiddenViewForm={hiddenViewForm}
                            idAndStatusForView={idAndStatusForView}
                            displayEditForm={displayEditForm}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

export default Program;
