import { 
    USER_LOGIN_RESET_FORM, 
    USER_LOGIN_SET_EMAIL, 
    USER_LOGIN_SET_ERROR_MESSAGE, 
    USER_LOGIN_SET_PASSWORD, 
    USER_LOGIN_START_LOADING, 
    USER_REGISTER_STOP_LOADING,
    USER_LOGIN_SET_ACCESS_TOKEN 
} from "../actionType";

const initialState = {
    email:"",
    password:"",
    isLoading:"",
    errorMessage:"",
    accessToken:""
};

const userLoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN_RESET_FORM:
            return {
                ...initialState,
            };
        case USER_LOGIN_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            };
        case USER_LOGIN_SET_PASSWORD:
            return {
                ...state,
                password: action.payload.password
            };
        case USER_LOGIN_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case USER_LOGIN_START_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case USER_REGISTER_STOP_LOADING:
            return {
                ...state,
                isLoading: false,
            };
        case USER_LOGIN_SET_ACCESS_TOKEN:
            return {
                ...state,
                accessToken: action.payload.accessToken
            }
        default:
            return state
    }
};

export default userLoginReducer;