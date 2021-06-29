import React from "react";
import { useSelector } from "react-redux";

import IsLoggedIn from "./isLoggedIn";

const NavBar = ()=> {
    const isLogin = useSelector(state => state.userLogin.isLogin)

    //console.log(isLogin)

    return (
        <>
          <IsLoggedIn isLoggedIn={isLogin}/>
        </>
    )
}
export default NavBar;