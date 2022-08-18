import React, { useState } from "react";
import GlobalContex from "./GlobalContext";


const GlobalProvider = (props) => {
    const [global, setGlobal] =  useState({
        login:"",
        password:"",
        idUser:0,
    })
    const handleLogin = (login,password,idUser)=>{
        setGlobal({
            login:login,
            password:password,
            idUser:idUser,
        })
    }
    const gbctx = {
        login:global.login,
        password:global.password,
        idUser:global.idUser,
        onLogin: handleLogin,
    }
    return(
        <GlobalContex.Provider value={gbctx}>
            {props.children}
        </GlobalContex.Provider>
    )
}

export default GlobalProvider;