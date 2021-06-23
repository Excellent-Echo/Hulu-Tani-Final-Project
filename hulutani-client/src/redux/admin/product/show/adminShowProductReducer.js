import { ADMIN_SHOW_SET_PRODUCTS } from "../../actionType"

const initialState = {
    products: [],
}

const adminShowProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADMIN_SHOW_SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state
    }
}

export default adminShowProductsReducer;