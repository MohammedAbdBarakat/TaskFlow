import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import assets from '../../assets/assest';
import InputForm from '../../components/ui-elements/InputForm';
import Form from '../../components/ui-elements/Form';
import PopUpNotification from '../../components/ui-elements/PopUpNotification';
import WarningLabel from '../../components/ui-elements/WarningLabel';
import axios, { AuthURL } from '../../api/axios';



const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
//It must have at least  one lower case letter , one upper case letter , 
//one digit and one of(!@#$%) and total number between 8->24 char

const SignUp = () => {
  const [userName, setUsername]=useState('');
  const [firstName , setFirstName]=useState("");
  const [lastName , setLastName]=useState("");
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [password2, setPassword2]=useState('');
  const [invalidField,setInvalidField]=useState(false);// If it's false, then there is no warning label in the form.

  const nav=useNavigate();

  
  const checkPassword=()=>{

    if (password.length < 8  ){
      if (password.length<=0){
        setInvalidField(false);
        return false;
        }
      setInvalidField("Password length must contain at least 8 chars");
      return false;
    }
    const result=PWD_REGEX.test(password);
    if (!result){
      setInvalidField("Use digits,symbols, and upper-lowercase characters");
      return false;
    }
    const match= (password ===password2);
    if (!match && password2.length>=password.length*2/3){
      setInvalidField("Password Match Error");
      return false;
    }
    setInvalidField(false);
    return true;
  };

  useEffect(()=>{
    checkPassword();
  },[password,password2])
  
  const handleSignUp=async(e)=>{
    e.preventDefault();
    setInvalidField("Wait...");
    if (checkPassword() && userName && email && firstName && lastName ){
      try {
        const res= await axios.post(AuthURL.RegisterPost , {userName, firstName, lastName, email, password }).then(res=>{
          if (res.status===200){
            nav("/auth/login");
          }
        });

      } catch (error) {
        const status=error.response.status;
        const message=error.response.data.message;
        if (status>=400 && status<500)
          setInvalidField(message)
        else if (status>=500)
          alert("Internal server error, Please Try later.");
        
      }
    }else 
    setInvalidField("All fields are required!")
  };

  const inputData=[
      {labelText:"User name", inputType:'text', imgIcon:assets.Ic_user, placeholder:'username', value:userName, setValue:setUsername, required:true,},
      {labelText:"First Name", inputType:'text', imgIcon:assets.Ic_user, placeholder:'Jack', value:firstName, setValue:setFirstName, required:true,},
      {labelText:"Last Name", inputType:'text', imgIcon:assets.Ic_user, placeholder:'Johanson', value:lastName, setValue:setLastName, required:true,},
      {labelText:"Email Address", inputType:'email', imgIcon:assets.Ic_email, placeholder:'example@example.com', value:email, setValue:setEmail, required:true,},     
      {labelText:"Password", inputType:'password', imgIcon:assets.Ic_pass, placeholder:'Str0ngP@ssor3', value:password, setValue:setPassword, required:true, },
      {labelText:"Password Verification", inputType:'password', imgIcon:assets.Ic_pass, placeholder:'Str0ngP@ssor3', value:password2, setValue:setPassword2, required:true, }
  ]
  const links=[
    {text:"Already have an account?",linkText:"Login" , navigation:"/auth"}
  ]
  
  
  return (
    <div className='flex justify-center max-sm:pt-[10%] pt-[4%] '>
      <Form formText={"Sign up"} inputData={inputData} links={links} buttonText={"Create Account"} buttonOnClick={handleSignUp} invalidField={invalidField}/>
    </div>
    )
}

export default SignUp