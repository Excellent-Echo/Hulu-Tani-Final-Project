import { ADMIN_SHOW_SET_PRODUCTS } from "../../actionType"

const initialState = {
    products: [],
    amount:0
}

const adminShowProductsReducer = (state = initialState, action) => {
    switch(action.type){
        case ADMIN_SHOW_SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case "ADMIN_SHOW_PRODUCT_SET_AMOUNT":
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state
    }
}

export default adminShowProductsReducer;