import { createContext , useEffect, useState } from "react";

const AuthContext= createContext({})


export const AuthProvider= ({children})=>{
/*
This component is responsible only for the user data
    auth:{
        accessToken,
        userID,
        userName,
        currentTech
    }
*/

    
    const [auth , setAuth]= useState({});
   
    useEffect(()=>{
        if (auth.accessToken){
            localStorage.setItem("accessToken" , auth.accessToken);
        }
    },[auth])

    
    return (
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext ;