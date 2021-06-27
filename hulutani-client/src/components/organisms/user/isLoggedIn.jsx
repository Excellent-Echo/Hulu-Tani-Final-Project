import React from 'react'

import PublicNav from "./publicNav";
import UserNav from "./userNav";

function IsLoggedIn(props) {
    const isLoggedIn = props.isLoggedIn;
    //console.log(isLoggedIn)

    return isLoggedIn === true ? <UserNav/> : <PublicNav/>
}

export default IsLoggedIn;