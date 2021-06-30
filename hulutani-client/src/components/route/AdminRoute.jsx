import React from "react";

import { Redirect, Route } from "react-router-dom";

const AdminRoute = (props) => {
  const accessToken = localStorage.getItem("adminToken");

  return accessToken === null || accessToken === "" ? (
    <Redirect to="/admin/login"></Redirect>
  ) : (
    <Route {...props}>{props.children}</Route>
  );
};

export default AdminRoute;