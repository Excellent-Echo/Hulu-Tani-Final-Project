import dummyClient from "../../../APIs/dummy"
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

        const res = await dummyClient({
            method: "GET",
            url:"/products"
        })

        dispatch({
            type: CATALOG_SET_ALL_PRODUCT,
            payload: res.data
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getFilterdProducts = (category) => async dispatch => {
    try {
        dispatch(startLoading())

        const res = await dummyClient({
            method: "GET",
            url:`/products/:${category}`
        })

        dispatch({
            type: CATALOG_SET_FILTERED_PRODUCTS,
            payload: res.data
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getSearchedProducts = (searchKey) => async dispatch =>{
    try {
        dispatch(startLoading())

        const res = await dummyClient({
            method: "GET",
            url:`/products?search=${searchKey}`
        })

        dispatch({
            type: CATALOG_SET_SEARCHED_PRODUCTS,
            payload: res.data
        })

        dispatch(stopLoading())
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
    getFilterdProducts,
    getSearchedProducts
}

export default catalogAction;