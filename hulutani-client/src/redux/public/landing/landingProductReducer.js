import { LANDING_PRODUCT_SET_ERROR_MESSAGE, LANDING_PRODUCT_SET_PRODUCTS_1, LANDING_PRODUCT_SET_PRODUCTS_2, LANDING_PRODUCT_START_LOADING, LANDING_PRODUCT_STOP_LOADING } from "../actionType";

const initialState = {
    productByCategory1: [],
    productByCategory2: [],
    isLoading:false,
    errorMessage:"",
};

const landingProductReducer = (state = initialState, action) => {
    switch (action.type) {
        case LANDING_PRODUCT_SET_PRODUCTS_1:
            return {
                ...state,
                productByCategory1: action.payload.productByCategory1
            }
        case LANDING_PRODUCT_SET_PRODUCTS_2:
            return {
                ...state,
                productByCategory2: action.payload.productByCategory2
            }
        case LANDING_PRODUCT_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case LANDING_PRODUCT_START_LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case LANDING_PRODUCT_STOP_LOADING:
            return {
                ...state,
                isLoading: false,
            }
        default:
            return state
    }
};

export default landingProductReducer;