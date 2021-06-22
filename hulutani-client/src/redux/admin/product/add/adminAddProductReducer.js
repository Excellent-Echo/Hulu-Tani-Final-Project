import { ADMIN_ADD_PRODUCT_RESET_FORM, ADMIN_ADD_PRODUCT_SET_PRODUCT_CATEGORY_ID, ADMIN_ADD_PRODUCT_SET_PRODUCT_DESCRIPTION, ADMIN_ADD_PRODUCT_SET_PRODUCT_IMAGE, ADMIN_ADD_PRODUCT_SET_PRODUCT_MEASURE, ADMIN_ADD_PRODUCT_SET_PRODUCT_NAME, ADMIN_ADD_PRODUCT_SET_PRODUCT_PRICE, ADMIN_ADD_PRODUCT_SET_PRODUCT_PROMO, ADMIN_ADD_PRODUCT_SET_PRODUCT_STOCK } from "../../actionType";

const initialState = {
    name:"",
    description:"",
    price:0,
    promo:"",
    stock:0,
    measure:"",
    image:"",
    categoryId:0,
}

const adminAddProductReducer = (state = initialState, action) => {
    switch(action.type){
        case ADMIN_ADD_PRODUCT_RESET_FORM:
            return {
                ...initialState
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_CATEGORY_ID:
            return {
                ...state,
                categoryId: action.payload.categoryId
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_NAME:
            return {
                ...state,
                name: action.payload.name
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_DESCRIPTION:
            return {
                ...state,
                description: action.payload.description
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_PRICE:
            return {
                ...state,
                price: action.payload.price
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_PROMO:
            return {
                ...state,
                promo: action.payload.promo
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_STOCK:
            return {
                ...state,
                stock: action.payload.stock
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_MEASURE:
            return {
                ...state,
                measure: action.payload.measure
            }
        case ADMIN_ADD_PRODUCT_SET_PRODUCT_IMAGE:
            return {
                ...state,
                image: action.payload.image
            }
        default:
            return state;
    }
}

export default adminAddProductReducer;