import { ADMIN_ADD_CATEGORY_RESET_FORM, ADMIN_ADD_CATEGORY_SET_CATEGORY, ADMIN_ADD_CATEGORY_SET_ERROR_MESSAGE, ADMIN_ADD_CATEGORY_SET_SUCCESS_MESSAGE, ADMIN_ADD_CATEGORY_START_LOADING, ADMIN_ADD_CATEGORY_STOP_LOADING } from "../../actionType"

const initialState = {
    categoryName:"",
    successMessage:"",
    errorMessage:"",
    isLoading:false,
}

const adminAddCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_ADD_CATEGORY_SET_CATEGORY:
            return {
                ...state,
                categoryName: action.payload.categoryName
            }
        case ADMIN_ADD_CATEGORY_SET_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: action.payload.successMessage
            }
        case ADMIN_ADD_CATEGORY_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case ADMIN_ADD_CATEGORY_START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ADMIN_ADD_CATEGORY_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        case ADMIN_ADD_CATEGORY_RESET_FORM:
            return {
                ...initialState,
            }
        default:
            return state
    }
}

export default adminAddCategoryReducer;