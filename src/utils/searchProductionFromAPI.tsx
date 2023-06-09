/*Hàm chỉ hoạt động trong compoent của react */

import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import logTimeApi from '../Api/logTimeApi';
type InputForSearch = {
    searchKeyWord: string;
  
};

function searchProductionFromAPI(searchKeyWord:string) {
    let listProducts =1;
    const [flagSearch, setFlagSearch] = useState(false);
    const querySearchProduct = useQuery({
        queryKey: ['search', searchKeyWord],
        queryFn: () => logTimeApi.searchProduct(searchKeyWord),
        enabled: !!searchKeyWord,
        onSuccess: (responseAfterSuccess) => {
            if (searchKeyWord) {
                setFlagSearch(true);
                listProducts = responseAfterSuccess.products;
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
            listProducts = queryGetAllProductForSearch.data.products;
        }
    }, [searchKeyWord]);

    return listProducts;
}

export default searchProductionFromAPI;
