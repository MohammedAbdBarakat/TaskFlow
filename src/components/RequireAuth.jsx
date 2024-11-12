import React, { useEffect } from 'react'
import { Outlet , Navigate, useNavigate, useLocation} from 'react-router-dom'
import useAuth from "../hooks/useAuth";

const RequireAuth = () => {
  const {auth , setAuth } =useAuth();
  const location= useLocation();
  console.log("Auth:" ,auth);
  useEffect(()=>{
    let accessToken=localStorage.getItem("accessToken");
    if (accessToken && !auth.accessToken){
        setAuth({...auth,accessToken});
    }

},[]);

    return <>
  { auth.accessToken && <Outlet/>   }
  </>
// : <Navigate to={"/"} state={{from:location}} replace />
}

export default RequireAuth