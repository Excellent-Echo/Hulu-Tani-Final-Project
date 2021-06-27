import hulutaniClient from "../../../APIs/hulutaniClient";
import {
  ADMIN_LOGIN_RESET_FORM,
  ADMIN_LOGIN_SET_ACCESS_TOKEN,
  ADMIN_LOGIN_SET_EMAIL,
  ADMIN_LOGIN_SET_ERROR_MESSAGE,
  ADMIN_LOGIN_SET_LOGIN,
  ADMIN_LOGIN_SET_LOGOUT,
  ADMIN_LOGIN_SET_PASSWORD,
  ADMIN_LOGIN_START_LOADING,
  ADMIN_LOGIN_STOP_LOADING,
} from "../actionType";

const resetForm = () => {
  return {
    type: ADMIN_LOGIN_RESET_FORM,
  };
};

const setEmail = (email) => {
  return {
    type: ADMIN_LOGIN_SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => {
  return {
    type: ADMIN_LOGIN_SET_PASSWORD,
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: ADMIN_LOGIN_SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setAccessToken = (accessToken) => {
  return {
    type: ADMIN_LOGIN_SET_ACCESS_TOKEN,
    payload: {
      accessToken: accessToken,
    },
  };
};

const logIn = () => {
  return {
    type: ADMIN_LOGIN_SET_LOGIN,
  };
};

const logOut = () => {
  return {
    type: ADMIN_LOGIN_SET_LOGOUT,
  };
};

const startLoading = () => {
  return {
    type: ADMIN_LOGIN_START_LOADING,
  };
};

const stopLoading = () => {
  return {
    type: ADMIN_LOGIN_STOP_LOADING,
  };
};

const adminLogin = (email, password, history) => async (dispatch) => {
  try {
    console.log("login...");
    dispatch(startLoading());
    dispatch(setErrorMessage(""));

    const submitData = {
      email: email,
      password: password,
    };
    //console.log(submitData)
    const admin = await hulutaniClient({
      method: "POST",
      url: "/admin/login",
      data: submitData,
    });
    localStorage.setItem("adminToken", admin.data.data.Authorization);
    // console.log(admin.data.data.Authorization);
    dispatch(setAccessToken(admin.response.data.Authorization));
    dispatch(logIn());
    dispatch(stopLoading());
  } catch (error) {
    console.log(error.response);
    dispatch(setErrorMessage(error.response));
    dispatch(stopLoading());
  }
};

const validateToken = (token) => async (dispatch) => {
  try {
    const admin = await hulutaniClient({
      method: "GET",
      url: "/admin",
    });

    const adminToken = admin.data.data.accessToken;
    if (adminToken === null) {
      localStorage.removeItem("accessToken");
      dispatch(logOut(false));
    } else {
      dispatch(setAccessToken(token));
      dispatch(logIn());
    }
  } catch (error) {
    console.log(error);
  }
};

const adminLoginAction = {
  setEmail,
  setPassword,
  resetForm,
  adminLogin,
  setAccessToken,
  validateToken,
  logIn,
  logOut,
};

export default adminLoginAction;