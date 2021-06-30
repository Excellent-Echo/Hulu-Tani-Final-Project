import React from "react";
import { useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import loginAction from "../redux/user/login/userLoginAction"

const PrivateRoute = props => {
  const accessToken = localStorage.getItem("accessToken")
  const dispatch = useDispatch()

  //console.log(accessToken)
  if(accessToken !== null || accessToken !== ""){
    dispatch(loginAction.logIn())
  }
  return accessToken === null || accessToken === "" ? <Redirect to="/login"></Redirect> : <Route {...props}>{props.children}</Route>
};

export default PrivateRoute;