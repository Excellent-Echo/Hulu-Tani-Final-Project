const initialState = {
    namalengkap:"",
    telepon:"",
    email:"",
    jenis:"",
    pesan:""
}

const adminAddContactReducer = (state =initialState, action) =>{
    switch(action.type){
        case "CONTACT_ADD_NAMA":
            return {
                ...state,
                namalengkap:action.payload
            }
        case "CONTACT_ADD_TELEPON":
            return {
                ...state,
                telepon:action.payload
            }
        case "CONTACT_ADD_EMAIL":
            return {
                ...state,
                email:action.payload
            }
        case "CONTACT_ADD_JENIS":
            return {
                ...state,
                jenis:action.payload
            }
        case "CONTACT_ADD_PESAN":
            return {
                ...state,
                pesan:action.payload
            }
        case "CONTACT_RESET_FORM":
            return {
                ...initialState
            }
        default:
            return state
    }
}

export default adminAddContactReducer;