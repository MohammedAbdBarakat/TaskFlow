import React from 'react'
import { Outlet  , Navigate} from 'react-router-dom'

const RequireOut = () => {
  const token=localStorage.getItem("accessToken");

  return <>
  {token==null ? <Outlet /> : <Navigate to={"/"}/> }
  </>

}

export default RequireOut