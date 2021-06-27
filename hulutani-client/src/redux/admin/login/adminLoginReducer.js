import {
  ADMIN_LOGIN_RESET_FORM,
  ADMIN_LOGIN_SET_EMAIL,
  ADMIN_LOGIN_SET_ERROR_MESSAGE,
  ADMIN_LOGIN_SET_PASSWORD,
  ADMIN_LOGIN_START_LOADING,
  ADMIN_LOGIN_STOP_LOADING,
  ADMIN_LOGIN_SET_ACCESS_TOKEN,
  ADMIN_LOGIN_SET_LOGIN,
  ADMIN_LOGIN_SET_LOGOUT,
} from "../actionType";

const initialState = {
  email: "",
  password: "",
  isLoading: false,
  errorMessage: "",
  accessToken: "",
  isLogin: false,
};

const adminLoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_RESET_FORM:
      return {
        ...initialState,
      };
    case ADMIN_LOGIN_SET_EMAIL:
      return {
        ...state,
        email: action.payload.email,
      };
    case ADMIN_LOGIN_SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password,
      };
    case ADMIN_LOGIN_SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      };
    case ADMIN_LOGIN_START_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ADMIN_LOGIN_STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };
    case ADMIN_LOGIN_SET_ACCESS_TOKEN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
      };
    case ADMIN_LOGIN_SET_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case ADMIN_LOGIN_SET_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };
    default:
      return state;
  }
};

export default adminLoginReducer;