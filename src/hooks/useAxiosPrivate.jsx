import { axiosPrivate } from "../api/axios"
import { useEffect } from "react"
import useAuth from "./useAuth"

const useAxiosPrivate = () => {
    const {auth} =useAuth();

    useEffect(()=>{

        const reqIntercept = axiosPrivate.interceptors.request.use(config=>{
            if(!config.headers['Authorization']){
                config.headers['Authorization']= `Bearer ${auth.accessToken}`;
            }
            return config;
        }, error=>Promise.reject(error));


        //For refresh Token
        // const resIntercept=axiosPrivate.interceptors.response.use((res)=>res , async (error)=>{
        //     const prevReq= error?.config;
        //     if (error?.response?.status === 403 && !prevReq?.sent){
        //         prevReq.sent = true;
        //         const newAccessToken = await refresh();
        //         prevReq.headers['Authorization']=`Bearer ${newAccessToken}`;

        //         return axiosPrivate(prevReq);
        //     }
        // })


        return ()=>{
            //For refresh Token
            // axiosPrivate.interceptors.response.eject(resIntercept);
            axiosPrivate.interceptors.request.eject(reqIntercept);
        
        }

    },[auth])



    return axiosPrivate;
}

export default useAxiosPrivate