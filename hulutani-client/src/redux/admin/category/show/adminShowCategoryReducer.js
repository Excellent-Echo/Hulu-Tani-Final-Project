import { ADMIN_SHOW_CATEGORY_SET_ERROR_MESSAGE, ADMIN_SHOW_CATEGORY_START_LOADING, ADMIN_SHOW_CATEGORY_STOP_LOADING, ADMIN_SHOW_SET_CATEGORIES } from "../../actionType"

const initialState = {
    categories:[],
    errorMessage:"",
    isLoading:false,
}

const adminShowCategoryReducer = (state = initialState, action) => {
    switch(action.type){
        case ADMIN_SHOW_SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        case ADMIN_SHOW_CATEGORY_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case ADMIN_SHOW_CATEGORY_START_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ADMIN_SHOW_CATEGORY_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }
        default:
            return state
    }
}

export default adminShowCategoryReducer;