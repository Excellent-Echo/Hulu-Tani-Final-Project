import hulutaniClient from "../../../APIs/hulutaniClient";
import {
  USER_LOGIN_RESET_FORM,
  USER_LOGIN_SET_ACCESS_TOKEN,
  USER_LOGIN_SET_EMAIL,
  USER_LOGIN_SET_ERROR_MESSAGE,
  USER_LOGIN_SET_LOGIN,
  USER_LOGIN_SET_LOGOUT,
  USER_LOGIN_SET_PASSWORD,
  USER_LOGIN_START_LOADING,
  USER_LOGIN_STOP_LOADING,
} from "../actionType";

const resetForm = () => {
  return {
    type: USER_LOGIN_RESET_FORM,
  };
};

const setEmail = (email) => {
  return {
    type: USER_LOGIN_SET_EMAIL,
    payload: {
      email: email,
    },
  };
};

const setPassword = (password) => {
  return {
    type: USER_LOGIN_SET_PASSWORD,
    payload: {
      password: password,
    },
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: USER_LOGIN_SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setAccessToken = (accessToken) => {
  return {
    type: USER_LOGIN_SET_ACCESS_TOKEN,
    payload: {
      accessToken: accessToken,
    },
  };
};

const logIn = () => {
  return {
    type: USER_LOGIN_SET_LOGIN,
  };
};

const logOut = () => {
  return {
    type: USER_LOGIN_SET_LOGOUT,
  };
};

const startLoading = () => {
  return {
    type: USER_LOGIN_START_LOADING,
  };
};

const stopLoading = () => {
  return {
    type: USER_LOGIN_STOP_LOADING,
  };
};

const userLogin = (email, password, history) => async (dispatch) => {
  try {
    console.log("login...");
    dispatch(startLoading());
    dispatch(setErrorMessage(""));

    const submitData = {
      email: email,
      password: password,
    };
    //console.log(submitData)
    const user = await hulutaniClient({
      method: "POST",
      url: "/user/login",
      data: submitData,
    });
    localStorage.setItem("accessToken", user.data.data.Authorization);
    //console.log(user)
    dispatch(setAccessToken(user.response.data.Authorization));
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
    const user = await hulutaniClient({
      method: "GET",
      url: "/user",
    });

    const userToken = user.data.data.accessToken;
    if (userToken === null) {
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

const userLoginAction = {
  setEmail,
  setPassword,
  resetForm,
  userLogin,
  setAccessToken,
  validateToken,
  logIn,
  logOut,
};

export default userLoginAction;