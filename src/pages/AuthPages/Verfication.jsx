import verification from '../../assets/verification/verification'
import PopUpNotification from '../ui-elements/PopUpNotification';


import React, { useEffect, useRef, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import axios , {AuthURL} from '../../api/axios';
import useAuth from '../../hooks/useAuth';

const Verfication = () => {
    const {setAuth} =useAuth();
    const nav=useNavigate();



    let x=0; //This hold the interval clock id.
    const [min,setMin]=useState(0);
    const [sec,setSec]=useState(1);
    const SetTimer=(min , sec)=>{
        setMin(min);
        setSec(sec);
    }

    //This is a Timer
    useEffect(()=>{
        x=setTimeout(()=>{        
            if (min===0 && sec===0){
                clearInterval(x);
            }else if (sec===0){
                setMin(-1+min);
                setSec(59);
            }else 
                setSec(-1+sec);
    },1000);
        
    },[sec]);

    const [n1,setN1]=useState('');
    const [n2,setN2]=useState('');
    const [n3,setN3] =useState('');
    const [n4,setN4] =useState('');
    const [n5,setN5] =useState('');
    const [n6,setN6] =useState('');

    const [popUp, setPopUp]=useState(false); //Error , Success , Code , false=>closed
    const [popDesc ,setPopDesc]=useState("");

    const verified=useRef(false); //If verifed then ,Success popUp will show up atfer clicking continue on it, it will be navigated to Landing Page.


    const handleResponseData_PopUp=(status , resData ,ReqName)=>{
        try { //This if there is an error status but its data is missing. ex:422 and resData.messages is undefined ,where is must be existed
            if(status===200){
                setPopDesc(resData.message);
                setPopUp("Success");
                return;
            }
            if (ReqName==='Verify'){
                if (status==500){
                    setPopDesc(resData.error);
                    setPopUp("Error");
                }else{
                    setPopDesc("Unexpected error");
                    setPopUp("Error"); 
                }
                return;
            }else if (ReqName==='Resend'){
                if (status==422){
                    setPopDesc(resData.messages.email[0]);
                    setPopUp(resData.error);
                }else if (status==429){
                    setPopDesc(resData.error);
                    setPopUp("Error");
                 }else {
                    setPopDesc("Unexpected error");
                    setPopUp("Error"); 
                };
                return;
            }
            else { 
                setPopDesc(resData.desc);
                setPopUp(resData.title);
            }
        } catch (error) {
            console.error(error.message);
            setPopDesc("Unexpected error");
            setPopUp("Error"); 
        }
        
        
    }

    const handleVerify=async(e)=>{
        e.preventDefault();
        const email=localStorage.getItem('email');
        const code=''+n1+n2+n3+n4+n5+n6;
        if (!email){
            setPopDesc("There is no email to be verified !\n Set it in the localStorage as 'email':'ex@ex.com' ");
            setPopUp("Error");
            return;

        }
        if (code.length<6){
            setPopDesc("Code length must be 6 !\n please insert the full code");
            setPopUp('Error');
            return;
        }
        //Then we have the required Data for verification request
        try {
            const res=await axios.post(AuthURL.VerifyEPost,{email,code}).then(res=>{
                setAuth( { access_token: res.data.token});
                console.log("Token: ",res.data);
                verified.current=true;
                handleResponseData_PopUp(res.status , res.data, "Verify");
            })
        } catch (err) {
            handleResponseData_PopUp(err.response.status , err.response.data , "Verify");
        }
    }

    const handleResendCode=async(e)=>{
        e.preventDefault();
        const email=localStorage.getItem('email');
         if (!email){
            setPopDesc("There is no email to be verified !\n Set it in the localStorage as 'email':'ex@ex.com' ");
            setPopUp("Error");
            return;
        } 
        try {
            const res=await axios.post(AuthURL.ResendVCodePost ,{email}).then((res)=>{
                handleResponseData_PopUp(res.status , res.data, "Resend");
                SetTimer(4,59);
            });

        } catch (err) {
            handleResponseData_PopUp(err.response.status , err.response.data, "Resend");
        }

    }
  return (
    <div className="w-screen h-screen max-h-screen">
        <div className="relative h-9 lg_linearHeadBack top-0 w-full 2xl:h-20 lg:lg_linearHeadBack lg:h-14 lg:z-0 lg:relative md:h-12 md:z-20 
        sm:visible max-sm:mb-20"></div>    
        <div className="flex flex-col  ">
            {/* mail pics */}
            <section id='images' className='flex justify-center items-center xl:h-[315px] my-10 max-sm:hidden'>
                <div className='relative inset-0 lg:w-[500px] lg:h-[315px] lg:py-10 md:w-1/3  md:h-[200px] max-lg:md:py-10'>
                    <img src={verification.ellipse8} className=' absolute top-0 right-0 max-lg:w-1/3' />
                    <div className="relative inset-[20%]">
                       {popUp ===false && <img src={verification.mail} className='absolute z-10 -top-12 max-lg:w-2/3  '/>}
                    </div>
                    <img src={verification.ellipse7} className='absolute bottom-0 left-0 max-lg:w-1/3' />
                </div>
            </section>
            <section className='flex flex-col items-center gap-8'>
                <div className='flex flex-col justify-center items-center gap-6'>
                    <h1 className='2xl:Body_Bold_00 lg:Body_Bold_01 Body_Bold_02'>please verify account</h1>
                    <div className='text-center lg:Body_02 Body_03 max-sm:space-y-4'>
                        <p>enter the 6 digit code (contains letters and numbers) that we sent</p>
                        <p>to your email address to verify your new account </p>
                    </div>
                </div>
                <form id="op" className='text-center'  >
                    <div className="flex items-center justify-center gap-3 Body_01  ">
                        <input
                            type="text" required onChange={(e)=>{setN1(e.target.value); e.currentTarget.nextSibling.focus()}} 
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D] sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%]"
                            maxLength="1"  />
                        <input
                            type="text"  required onChange={(e)=>{setN2(e.target.value);e.currentTarget.nextSibling.focus()}}
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D] sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%]"
                            maxLength="1"  />
                        <input
                            type="text" required onChange={(e)=>{setN3(e.target.value);e.currentTarget.nextSibling.focus()}}
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D] sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%]"
                            maxLength="1"  />
                        <input
                            type="text" required onChange={(e)=>{setN4(e.target.value);e.currentTarget.nextSibling.focus()}}
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D] sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%]"
                            maxLength="1"  />
                        <input
                            type="text" required onChange={(e)=>{setN5(e.target.value);e.currentTarget.nextSibling.focus()}}
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D]   sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%]"
                            maxLength="1"  />
                        <input
                            type="text" required onChange={(e)=>{setN6(e.target.value);}}
                            className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[#121C17] bg-opacity-[0.13] border-2  hover:border-[#14B05D] focus-within:border-[#14B05D] text-[#14B05D]   sm:p-4 outline-none focus:bg-[#14B05D] focus:bg-opacity-[6%] "
                            maxLength="1"  />
                    </div>
                    <p className='Body_02 max-sm:Body_03 max-sm:my-4 pt-8'>valid for {min}:{sec <10 ? "0"+sec: sec}</p>
                    
                    <p className='Body_02 max-sm:Body_03 max-sm:my-4 pt-2 pb-7 text-[#0E7E83]'>
                        <button onClick={(e)=>{
                            handleResendCode(e);
                        }}
                        disabled={!(min===0 && sec===0)} className={`disabled:text-[#00021F]`} >resend code</button>
                    </p>
                    <button onClick={(e)=>{handleVerify(e)}}
                    className="sm:w-[304px] sm:h-[64px] sm:Body_02 w-[200px] h-[50px] bg-[#2BE784]  border border-black rounded-lg shadow-lg drop-shadow-xl shadow-[rgba(0,0,0,0.25)] hover:bg-opacity-80 outline-none mb-5 ">
                            verify and continue</button>
                </form>
            </section>
            </div>
           {popUp==='Success' ? <PopUpNotification title={popUp} desc={popDesc} buttonText={"Continue"} buttonClassName={"text-[#2BE784]"} setClosePop={setPopUp} navigation={()=>{ if (verified.current)nav('/'); }}/> :
                    popUp ? <PopUpNotification title={popUp} desc={popDesc} buttonText={"Dismiss"} buttonClassName={"text-[#E55B5B]"} setClosePop={setPopUp}/> : "" }
    </div>
    )
}

export default Verfication