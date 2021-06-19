import dummyClient from "../../../APIs/dummy";
import { DETAIL_PRODUCT_SET_DETAIL_PRODUCT, DETAIL_PRODUCT_SET_ERROR_MESSAGE, DETAIL_PRODUCT_START_LOADING, DETAIL_PRODUCT_STOP_LOADING } from "../actionType";

const startLoading = () => {
    return {
        type: DETAIL_PRODUCT_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: DETAIL_PRODUCT_STOP_LOADING,
    };
};

const setErrorMessage = errorMessage => {
    return {
        type: DETAIL_PRODUCT_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const getDetailProduct = (id) => async dispatch => {
    try {
        dispatch(startLoading())

        const res = await dummyClient({
            method: "GET",
            url:`/products/${id}`
        })

        dispatch({
            type: DETAIL_PRODUCT_SET_DETAIL_PRODUCT,
            payload: {
                productDetail: res.data
            }
        })

        dispatch(stopLoading())
    } catch (error) {
        console.log(error)
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const detailProductAction = {
    getDetailProduct
}

export default detailProductAction;