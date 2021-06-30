import hulutaniClient from "../../../APIs/hulutaniClient"
import { CATALOG_SET_ALL_PRODUCT, CATALOG_SET_CATEGORY, CATALOG_SET_ERROR_MESSAGE, CATALOG_SET_FILTERED_PRODUCTS, CATALOG_SET_PRICE, CATALOG_SET_SEARCHED_PRODUCTS, CATALOG_SET_SEARCH_KEY, CATALOG_START_LOADING, CATALOG_STOP_LOADING } from "../actionType"

const setCategory = (category) => {
    return {
        type: CATALOG_SET_CATEGORY,
        payload: {
            category:category
        }
    }
}

const setSearchKey = (searchKey) => {
    return {
        type: CATALOG_SET_SEARCH_KEY,
        payload: {
            searchKey: searchKey
        }
    }
}

const setPrice = (price) => {
    return {
        type: CATALOG_SET_PRICE,
        payload: {
            price: price
        }
    }
}

const startLoading = () => {
    return {
        type: CATALOG_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: CATALOG_STOP_LOADING,
    };
};

const setErrorMessage = errorMessage => {
    return {
        type: CATALOG_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const getAllProducts = () => async dispatch =>{
    try {
        dispatch(startLoading())

        const res = await hulutaniClient({
            method: "GET",
            url:"/produk"
        })
        
        //console.log(res.data.data)
        dispatch({
            type: CATALOG_SET_ALL_PRODUCT,
            payload: res.data.data
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getFilterdProductsByCategory = (id) => async dispatch => {
    try {
        dispatch(startLoading())

        const res = await hulutaniClient({
            method: "GET",
            url:`/kategori/${id}`
        })

        dispatch({
            type: CATALOG_SET_FILTERED_PRODUCTS,
            payload:  res.data.data.produks
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getFilterdProductsByPrice = (data) => async dispatch => {
    try {
        dispatch(startLoading())


        const res = await hulutaniClient({
            method: "POST",
            url:`/produk/harga`,
            data: data
        })

        dispatch({
            type: CATALOG_SET_FILTERED_PRODUCTS,
            payload:  res.data.data
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getSearchedProducts = (searchKey,history) => async dispatch =>{
    try {
        dispatch(startLoading())

        const res = await hulutaniClient({
            method: "GET",
            url:`/produk/nama/${searchKey}`
        })

        dispatch({
            type: CATALOG_SET_FILTERED_PRODUCTS,
            payload: res.data.data
        })

        dispatch(getAllProducts)
        dispatch(stopLoading())
        history.push("/products")
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const catalogAction = {
    setCategory,
    setPrice,
    setSearchKey,
    getAllProducts,
    getFilterdProductsByCategory,
    getFilterdProductsByPrice,
    getSearchedProducts
}

export default catalogAction;