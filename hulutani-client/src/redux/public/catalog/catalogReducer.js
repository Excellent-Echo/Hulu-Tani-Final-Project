import { CATALOG_SET_ALL_PRODUCT, CATALOG_SET_CATEGORY, CATALOG_SET_ERROR_MESSAGE, CATALOG_SET_FILTERED_PRODUCTS, CATALOG_SET_SEARCHED_PRODUCTS, CATALOG_SET_SEARCH_KEY, CATALOG_START_LOADING, CATALOG_STOP_LOADING } from "../actionType"

const initialState = {
    allProduct: [],
    filteredProduct: [],
    searchedProduct: [],
    category:"",
    price:"",
    searchKey:"",
    isLoading:false,
    errorMessage:"",
}

const catalogReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATALOG_SET_ALL_PRODUCT:
            return {
                ...state,
                allProduct: action.payload
            }
        case CATALOG_SET_FILTERED_PRODUCTS:
            return {
                ...state,
                filteredProduct: action.payload.filteredProduct
            }
        case CATALOG_SET_SEARCHED_PRODUCTS:
            return {
                ...state,
                searchedProduct: action.payload.searchedProduct
            }
        case CATALOG_SET_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload.searchKey
            }
        case CATALOG_SET_CATEGORY:
            return {
                ...state,
                category: action.payload.category
            }
        case CATALOG_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case CATALOG_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case CATALOG_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }

        default:
            return state;
    }
}

export default catalogReducer;