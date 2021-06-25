const initialState = {
    key:"hulutani langsung dari para petani",
    cart:[],
    idProduct:0,
    quantity:0,
    // Image:"",
    // name:"",
}

const addCartReducer=(state = initialState, action) => {
    switch(action.type){
        case "RESET_CART":
            return {
                ...initialState
            }
        case "ADD_CART_SET_QUANTITY":
            return {
                ...state,
                quantity: action.payload.quantity
            }
        case "ADD_CART_SET_CART":
            return {
                ...state,
                cart:[ ...state.cart, action.payload]
            }
        case "ADD_CART_SET_CART_KEY":
            return {
                ...state,
                key: action.payload.key
            }
        case "ADD_CART_SET_CART_ID":
            return {
                ...state,
                idProduct: action.payload
            }
        default:
            return state;
    }
}

export default addCartReducer;