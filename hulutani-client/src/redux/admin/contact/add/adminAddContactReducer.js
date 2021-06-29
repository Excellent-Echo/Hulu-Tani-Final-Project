const initialState = {
    namaLengkap:"",
    noTelepon:"",
    email:"",
    jenis:"",
    pesan:""
}

const adminAddContactReducer = (state =initialState, action) =>{
    switch(action.type){
        case "CONTACT_ADD_NAMA_LENGKAP":
            return {
                ...state,
                namaLengkap: action.payload
            }
        case "CONTACT_ADD_NO_TELEPON":
            return {
                ...state,
                noTelepon:action.payload
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