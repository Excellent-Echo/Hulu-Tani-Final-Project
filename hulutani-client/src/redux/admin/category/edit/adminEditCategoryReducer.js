import { ADMIN_ADD_CATEGORY_STOP_LOADING, ADMIN_UPDATE_CATEGORY_SET_CATEGORY, ADMIN_UPDATE_CATEGORY_SET_ERROR_MESSAGE, ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY, ADMIN_UPDATE_CATEGORY_SET_SUCCESS_MESSAGE, ADMIN_UPDATE_CATEGORY_START_LOADING } from "../../actionType"

const initialState = {
    categoryID:0,
    categoryName:"",
    successMessage:"",
    errorMessage:"",
    isLoading:false,
}

const adminEditCategoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY:
            return {
                ...state,
                categoryID: action.payload.categoryID
            }
        case ADMIN_UPDATE_CATEGORY_SET_CATEGORY:
            return {
                ...state,
                categoryName: action.payload.categoryName
            }
        case ADMIN_UPDATE_CATEGORY_SET_SUCCESS_MESSAGE:
            return {
                ...state,
                successMessage: action.payload.successMessage
            }
        case ADMIN_UPDATE_CATEGORY_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case ADMIN_UPDATE_CATEGORY_START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ADMIN_ADD_CATEGORY_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default adminEditCategoryReducer;