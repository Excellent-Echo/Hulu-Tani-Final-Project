import { 
    USER_REGISTER_RESET_FORM, 
    USER_REGISTER_SET_DATE_BIRTH, 
    USER_REGISTER_SET_EMAIL, 
    USER_REGISTER_SET_ERROR_MESSAGE, 
    USER_REGISTER_SET_GENDER, 
    USER_REGISTER_SET_HANDPHONE_NUMBER, 
    USER_REGISTER_SET_NAME, 
    USER_REGISTER_SET_PASSWORD, 
    USER_REGISTER_SET_SUCCES_MESSAGE, 
    USER_REGISTER_START_LOADING, 
    USER_REGISTER_STOP_LOADING 
} from "../actionType"

const initalState = {
    name:"",
    dateBirth:"",
    handphoneNumber:"",
    gender:"",
    email:"",
    password:"",
    errorMessage:"",
    successMessage:"",
    isLoading:false
}

const userRegisterReducer = (state = initalState, action) => {
    switch (action.type){
        case USER_REGISTER_RESET_FORM:
            return {
                ...initalState,
            };
        case USER_REGISTER_SET_NAME:
            return {
                ...state,
                name: action.payload.name
            };
        case USER_REGISTER_SET_DATE_BIRTH:
            return {
                ...state,
                dateBirth: action.payload.dateBirth
            };
        case USER_REGISTER_SET_HANDPHONE_NUMBER:
            return {
                ...state,
                handphoneNumber: action.payload.handphoneNumber
            };
        case USER_REGISTER_SET_GENDER:
            return {
                ...state,
                gender: action.payload.gender
            };
        case USER_REGISTER_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            };
        case USER_REGISTER_SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            };
        case USER_REGISTER_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case USER_REGISTER_SET_SUCCES_MESSAGE:
            return {
                ...state,
                successMessage: action.payload.successMessage
            };
        case USER_REGISTER_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_REGISTER_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}

export default userRegisterReducer;