import React from "react";

import { Redirect, Route } from "react-router-dom";
//import { useSelector } from "react-redux";

const PrivateRoute = props => {
  const accessToken = localStorage.getItem("accessToken")

  return accessToken === null ? <Redirect to="/login"></Redirect> : <Route {...props}>{props.children}</Route>
};

export default PrivateRoute;