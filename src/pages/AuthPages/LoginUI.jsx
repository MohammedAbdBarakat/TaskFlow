import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import assets from '../../assets/assest';
import Form from '../../components/ui-elements/Form';
import PopUpNotification from '../../components/ui-elements/PopUpNotification';
import axios, {AuthURL} from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const [userName, setUserName]=useState('');
  const [password, setPassword]=useState('');

  const {setAuth} = useAuth();
  const [popUp , setPopUp]=useState(false);
  const [popUpDesc, setPopDesc]=useState("");
  const nav= useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  const handleResponseData_PopUp=(status , resData)=>{
    if(status===200){
        setPopDesc("Welcome Back Mr/Miss !");
        setPopUp("Success");
        return;
    }else if (status===400 || status===401){
        setPopDesc(resData.message);
        setPopUp("Error");
        return;
    }
  }

  const handleLogin=async(e)=>{
    e.preventDefault();

    try {
        const res= await axios.post(AuthURL.LoginPost, {userName , password}).then(res=>{
          console.log("res 2xx : ",res);
          handleResponseData_PopUp(res.status , res.data);
          setAuth(res.data);

        })
    } catch (err) {
      console.log(err);
      // handleResponseData_PopUp(err.response.status , err.response.data);
    }
  }


  const inputData=[
    {
      labelText:"Email Address" , inputType:'text', imgIcon:assets.Ic_user, placeholder:'USER_NAME', value:userName, setValue:setUserName, required:true,
    },
    {
     labelText:"Password", inputType:'password', imgIcon:assets.Ic_pass, placeholder:'***********', value:password, setValue:setPassword, required:true,
    }
  ]
  const links=[
    {text:"Don’t have an account?" ,linkText:"SIGN UP" , navigation:"/auth/signup" },
    {text:"Forgot Password?" ,linkText:"Change Password" , navigation:"/auth/passwordChange" }
  ]
  
  
  return (
    <div className='flex justify-center py-[2%] max-sm:py-[20%] '>
      <Form formText={"Login"} inputData={inputData} links={links} buttonText={"Login"} buttonOnClick={handleLogin}/>
      {popUp=="Success" ? <PopUpNotification title={popUp} desc={popUpDesc} buttonText={'Continue'} buttonClassName={'text-green-600'} setClosePop={()=>{setPopUp(false); nav(from,{replace:true})}}/> :
      popUp ?<PopUpNotification title={popUp} desc={popUpDesc} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setPopUp} /> :""}
    </div>
    )
}

export default Login