import { DETAIL_PRODUCT_SET_DETAIL_PRODUCT, DETAIL_PRODUCT_SET_ERROR_MESSAGE, DETAIL_PRODUCT_START_LOADING, DETAIL_PRODUCT_STOP_LOADING } from "../actionType";

const initialState = {
    productDetail : {},
    isLoading:false,
    errorMessage:"",
};

const detailProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case DETAIL_PRODUCT_SET_DETAIL_PRODUCT:
            return {
                ...state,
                productDetail: action.payload.productDetail
            }
        case DETAIL_PRODUCT_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case DETAIL_PRODUCT_START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case DETAIL_PRODUCT_STOP_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        default: 
            return state
    }
};

export default detailProductReducer;