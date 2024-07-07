import React, { createContext, useContext, useState } from "react"

const LoginContext = createContext();

const LoginContextProvider =({children})=>
{

    const [user,setUser] = useState({
        name:"",
        email:""
    })

    const Login =(Name,Email)=>
    {
        setUser({
                ...user,
                name:Name,
                email:Email
                })
    }

    const Logout =()=>
    {
        setUser({
                ...user,
                name:"",
                email:""
                })
    }

    return <LoginContext.Provider value={{Login,Logout,user}}>{children}</LoginContext.Provider>
}

export default LoginContextProvider;

export const LoginData =()=>
{
    return useContext(LoginContext);
}