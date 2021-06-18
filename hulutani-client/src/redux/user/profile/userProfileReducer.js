import { 
    USER_PROFILE_SET_DATE_BIRTH, 
    USER_PROFILE_SET_EMAIL, 
    USER_PROFILE_SET_ERROR_MESSAGE, 
    USER_PROFILE_SET_GENDER, 
    USER_PROFILE_SET_HANDPHONE_NUMBER, 
    USER_PROFILE_SET_NAME, 
    USER_PROFILE_SET_USER_ID, 
    USER_PROFILE_START_LOADING, 
    USER_PROFILE_STOP_LOADING 
} from "../actionType"

const initialState = {
    id:0,
    name:"",
    dateBirth:"",
    handphoneNumber:"",
    gender:"",
    email:"",
    errorMessage:"",
    isLoading:false,
}

const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_PROFILE_SET_USER_ID:
            return {
                ...state,
                id: action.payload.id
            }
        case USER_PROFILE_SET_NAME:
            return {
                ...state,
                name: action.payload.name
            };
        case USER_PROFILE_SET_DATE_BIRTH:
            return {
                ...state,
                dateBirth: action.payload.dateBirth
            }
        case USER_PROFILE_SET_HANDPHONE_NUMBER:
            return {
                ...state,
                handphoneNumber: action.payload.handphoneNumber
            }   
        case USER_PROFILE_SET_GENDER:
            return {
                ...state,
                gender: action.payload.gender
            }
        case USER_PROFILE_SET_EMAIL:
            return {
                ...state,
                email: action.payload.email
            }
        case USER_PROFILE_SET_ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            };
        case USER_PROFILE_START_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_PROFILE_STOP_LOADING:
            return {
                ...state,
                isLoading: false
            };
        default:
            return state;
    }
}

export default userProfileReducer;
