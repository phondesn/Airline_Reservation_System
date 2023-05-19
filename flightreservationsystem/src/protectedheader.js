import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import Header from "./header";
import Header2 from "./header2";

function ProtectedHeader() {

    var isLoggedIn=false

    var email = sessionStorage.getItem("email");
    // debugger;
    if (email!=null) {
        // setIsLoggedIn(true)
        isLoggedIn=true;
    } 

    if (isLoggedIn) {
        return <Header2/>
    } else {
        return <Header/>
    }

}

export default ProtectedHeader;