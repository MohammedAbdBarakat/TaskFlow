import React, { useState , useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import assets from '../../assets/assest';
import InputForm from '../../components/ui-elements/InputForm';
import WarningLabel from '../../components/ui-elements/WarningLabel';
import PopUpNotification from '../../components/ui-elements/PopUpNotification';
import Form from '../../components/ui-elements/Form';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const PasswordChange = () => {
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [password2, setPassword2]=useState('');

  const [error , setError]=useState("Error");
  const [errDesc, setErrDesc]=useState("Error Desc");
  const [invalidField,setInvalidField]=useState(false);
  
  const nav= useNavigate();

  const checkPassword=()=>{

    if (password.length < 8  ){
      if (password.length<=0){
        setInvalidField(false);
        return;
        }
      setInvalidField("Password length must contain at least 8 chars");
      return;
    }
    const result=PWD_REGEX.test(password);
    if (!result){
      setInvalidField("Password is weak");
      return;
    }
    const match= (password ===password2);
    if (!match && password2.length>=password.length*2/3){
      setInvalidField("Password Match Error");
      return;
    }
    setInvalidField(false);
  };
  useEffect(()=>{
    checkPassword();
  },[password,password2])
  
  const handleSendCode=(e)=>{
    e.preventDefault();
    console.log("Code Must be sent");
  }
  
  const inputData=[
           {labelText:"Email Address", inputType:'email', imgIcon:assets.Ic_email, placeholder:'example@example.com', value:email, setValue:setEmail, required:true,},
           {labelText:"New Password", inputType:'password', imgIcon:assets.Ic_pass, placeholder:'Str0ngP@ssor3', value:password, setValue:setPassword, required:true,},
           {labelText:"Password Verification", inputType:'password', imgIcon:assets.Ic_pass, placeholder:'Str0ngP@ssor3', value:password2, setValue:setPassword2, required:true}
  ]
  const links=[
    {text:"6 digit code will be sent to your email."},
    {text:"This code is valid for 3 minutes"}
  ]
  
  return (
    <div className='flex justify-center py-[0.8%] max-sm:py-[10%] '>
      
          <Form formText={"Change Password"} buttonText={"Send Code"} inputData={inputData} links={links} invalidField={invalidField} buttonOnClick={handleSendCode} />
         
      {error=="Success" ? <PopUpNotification title={error} desc={errDesc} buttonText={'Continue'} buttonClassName={'text-green-600'} setClosePop={setError} navigation={()=>{nav("/");}}/> :
      error ?<PopUpNotification title={error} desc={"This is popUpDescription"} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setError} /> :""}
    </div>
    )
}

export default PasswordChange