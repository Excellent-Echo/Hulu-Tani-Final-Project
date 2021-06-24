const initialState = {
    contacts:[]
}

const adminShowContactReducer = (state= initialState, action) => {
    switch(action.type){
        case "ADMIN_SHOW_CONTACT":
            return {
                ...state,
                contacts: action.payload
            }
        default:
            return state
    }
}

export default adminShowContactReducer;