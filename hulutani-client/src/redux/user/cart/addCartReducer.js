const initialState = {
    idProduct:0,
    quantity:0,
    cartCode:0
}

const addCartReducer=(state = initialState, action) => {
    switch(action.type){
        case "ADD_CART_SET_IDPRODUCT":
            return {
                idProduct: action.payload.idProduct
            }
        case "ADD_CART_SET_QUANTITY":
            return {
                quantity: action.payload.quantity
            }
        case "ADD_CART_SET_CART_CODE":
            return {
                cartCode: action.payload.cartCode
            }
        default:
            return state;
    }
}

export default addCartReducer;