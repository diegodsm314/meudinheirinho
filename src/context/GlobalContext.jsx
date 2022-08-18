import React from "react";

const GlobalContext = React.createContext({
    login: "",
    password: "",
    idUser: 0,
    onLogin: ()=>{},
})

export default GlobalContext;