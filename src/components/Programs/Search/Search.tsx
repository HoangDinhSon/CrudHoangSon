import { Fill, MyIconSeachBody, MyIconSearchHeader } from '../../../myIconMui';
import { Button, OutlinedInput } from '@mui/material';
import { SEARCH_KEY_WORD } from '../../../const';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import logTimeApi from '../../../Api/logTimeApi';

function Search(props: any) {
    const displayAddForm = props.displayAddForm;
    const getDataFromSearch = props.getDataFromSearch;
    const [searchKeyWord, setSearchKeyword] = useState(SEARCH_KEY_WORD);
    const [flagSearch, setFlagSearch] = useState(false);
    const handleAddForm = () => {
        displayAddForm();
    };
    //Input
    const handleGetDataSearchBox = (e: any) => {
        setSearchKeyword(e.target.value);
        getDataFromSearch(e.target.value);
    };
    const queryResponse = useQuery({
        queryKey: ['products'],
        queryFn: () => logTimeApi.getAll,
        staleTime: 0, // default của chương trình
        cacheTime: 50000, // default chương trình
        onSuccess: () => {},
        onError: () => {},
    });
    const data = queryResponse.data;
    //Search
    const querySearchProduct = useQuery({
        queryKey: ['search', searchKeyWord],
        queryFn: () => logTimeApi.searchProduct(searchKeyWord),
        enabled: !!searchKeyWord,
        onSuccess:(res)=>{
          if (searchKeyWord) {
            setFlagSearch(true);
            data.products = res.products;
        }
        }
    });
    // if (querySearchProduct.status === 'success') {
       
    // }

    const queryGetAllProductForSearch = useQuery({
        queryKey: ['getAllProductForSearch'],
        queryFn: () => logTimeApi.getAllProductsForSearch(),
    });
    useEffect(() => {
        if (searchKeyWord.length == 0 && flagSearch) {
            data.products = queryGetAllProductForSearch.data.products;
            // console.log('Searchdata.products>>>', data.products);
        }
    }, [searchKeyWord]);
    return (
        <div className="Wrap py-[19px] px-[15px]  flex justify-between font-[Exo] mobile:block mobile:py-[10px] mobile:px-[1]">
            <div className="search w-[400px] h-8 flex items-center mobile:justify-between mobile:w-full ">
                <div className="relative">
                    <div className=" absolute top-[50%] -translate-y-[50%] left-2 ">
                        <div className="relative w-[15px] h-[15px]">
                            <MyIconSeachBody
                                sx={{
                                    width: 14,
                                    height: 14,
                                    position: 'absolute',
                                    bottom: 2,
                                    right: 2,
                                }}
                            />
                            <MyIconSearchHeader
                                sx={{
                                    width: 5,
                                    height: 5,
                                    position: 'absolute',
                                    bottom: 1,
                                    right: 0,
                                }}
                            />
                        </div>
                    </div>
                    <OutlinedInput
                        placeholder="   Search programs"
                        color="success"
                        size="small"
                        className="w-[202px]"
                        sx={{
                            height: 32,
                            paddingLeft: '16px',
                            outline: 'none',
                            fontSize: 12,
                        }}
                        onChange={(e) => {
                            handleGetDataSearchBox(e);
                        }}
                    />
                </div>

                <div className="ml-[7px] relative">
                    <Button
                        className="w-[100px]  "
                        sx={{
                            height: 32,
                            backgroundColor: '#EFEFEF',
                            color: 'black',
                            fontSize: 12,
                        }}
                    >
                        <Fill
                            sx={{
                                marginRight: '2px',
                                height: '15px',
                            }}
                        />
                        Station
                    </Button>
                </div>
            </div>
            <div className="add-station  mobile:mx-0 mobile:my-1">
                <Button
                    className="w-[103px] "
                    sx={{
                        height: 32,
                        width: '100%',
                        fontSize: 12,
                        backgroundColor: '#004744',
                        color: 'white',
                        ':hover': {
                            backgroundColor: '#004744',
                        },
                    }}
                    onClick={handleAddForm}
                >
                    + Add Station
                </Button>
            </div>
        </div>
    );
}

export default Search;
