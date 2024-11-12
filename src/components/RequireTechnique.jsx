import React, { useEffect  , useState} from 'react'
import { Outlet , Navigate } from 'react-router-dom'
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { Techniques } from '../api/axios';


const RequireTechnique = () => {
    const [requireTech , setReqTech]=useState(false);
    const [checking , setChecking]=useState(true);
    const axiosPrivate= useAxiosPrivate();  
  
    const CheckTeck=async ()=>{
        try {
          const res= await axiosPrivate.get(Techniques.getTechniquesGET).then(res=>{
            if (res.status===200){
              if (res.data.currentTechnique=="None"){
                setReqTech(true);
                console.log(res.data.currentTechnique)
              }          
              else{
                setReqTech(false);
              }
              setChecking(false);
            }
          });
        } catch (error) {
          console.log(error);
        };
        setChecking(false);
      }
    
      useEffect(()=>{
        CheckTeck();
        console.log("Teck is checked")
      },[])

  return (
    ( !checking ? (requireTech==true ? <Navigate to={"technique"} /> : <Outlet/>) : <div>Wait...</div> ) 
    )
}

export default RequireTechnique