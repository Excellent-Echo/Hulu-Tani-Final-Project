import dummyClient from "../../../APIs/dummy";
import { LANDING_PRODUCT_SET_ERROR_MESSAGE, LANDING_PRODUCT_SET_PRODUCTS_1, LANDING_PRODUCT_SET_PRODUCTS_2, LANDING_PRODUCT_START_LOADING, LANDING_PRODUCT_STOP_LOADING } from "../actionType";

const startLoading = () => {
    return {
        type: LANDING_PRODUCT_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: LANDING_PRODUCT_STOP_LOADING,
    };
};

const setErrorMessage = errorMessage => {
    return {
        type: LANDING_PRODUCT_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const getProductCategory1 = () => async dispatch => {
    try {
        dispatch(startLoading())

        const res = await dummyClient({
            method: "GET",
            url:"/products/sayur"
            //set hardcode category sesuai pilihan
        })

        dispatch({
            type: LANDING_PRODUCT_SET_PRODUCTS_1,
            payload: {
                productByCategory1: res.data
            }
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const getProductCategory2 = () => async dispatch => {
    try {
        dispatch(startLoading())

        const res = await dummyClient({
            method: "GET",
            url:"/products/buah"
            //set hardcode category sesuai pilihan
        })

        dispatch({
            type: LANDING_PRODUCT_SET_PRODUCTS_2,
            payload: {
                productByCategory2: res.data
            }
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const landingProductAction = {
    getProductCategory1,
    getProductCategory2
}

export default landingProductAction;