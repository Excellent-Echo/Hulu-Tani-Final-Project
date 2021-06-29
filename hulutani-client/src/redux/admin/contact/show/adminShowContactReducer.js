const initialState = {
    contacts:[],
    amount:0
}

const adminShowContactReducer = (state= initialState, action) => {
    switch(action.type){
        case "ADMIN_SHOW_CONTACT":
            return {
                ...state,
                contacts: action.payload
            }
        case "ADMIN_SHOW_CONTACT_SET_AMOUNT":
            return {
                ...state,
                amount: action.payload
            }
        default:
            return state
    }
}

export default adminShowContactReducer;