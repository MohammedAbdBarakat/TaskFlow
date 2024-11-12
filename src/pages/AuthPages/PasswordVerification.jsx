
import React ,{useState , useEffect , useRef} from 'react'
import verification from "../../assets/verification/verification";
import { useNavigate } from 'react-router-dom';
const AccountVerfication = () => {
  
  const [n1,setN1]=useState('');
  const [n2,setN2]=useState('');
  const [n3,setN3] =useState('');
  const [n4,setN4] =useState('');
  const [n5,setN5] =useState('');
  const [n6,setN6] =useState('');

  const nav=useNavigate();

  const [popUp, setPopUp]=useState(false); //Error , Success , Code , false=>closed
  const [popDesc ,setPopDesc]=useState("");

  let x=0; //This hold the interval clock id.
    const [min,setMin]=useState(3);
    const [sec,setSec]=useState(0);
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
        return ()=>{
          clearTimeout(x);
        }
    },[sec]);
  // const verified=useRef(false); //If verifed then ,Success popUp will show up atfer clicking continue on it, it will be navigated to Landing Page.


return (
  <div className="w-screen h-screen max-h-screen pt-[10%]">
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
                  <h1 className='2xl:Body_Bold_00 lg:Body_Bold_01 Body_Bold_02 capitalize text-center'>please verify account to change password</h1>
                  <div className='text-center lg:Body_02 Body_03 space-y-4'>
                      <p>enter the 6 digit code (contains letters and numbers) that we sent</p>
                      <p>to your email address to verify your new account </p>
                  </div>
              </div>
              <form id="op" className='text-center'  >
                  <div className="flex items-center justify-center gap-3 Body_01  ">
                      <input
                          type="text" required onChange={(e)=>{setN1(e.target.value); e.currentTarget.nextSibling.focus()}} 
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text] sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%]"
                          maxLength="1"  />
                      <input
                          type="text"  required onChange={(e)=>{setN2(e.target.value);e.currentTarget.nextSibling.focus()}}
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text] sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%]"
                          maxLength="1"  />
                      <input
                          type="text" required onChange={(e)=>{setN3(e.target.value);e.currentTarget.nextSibling.focus()}}
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text] sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%]"
                          maxLength="1"  />
                      <input
                          type="text" required onChange={(e)=>{setN4(e.target.value);e.currentTarget.nextSibling.focus()}}
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text] sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%]"
                          maxLength="1"  />
                      <input
                          type="text" required onChange={(e)=>{setN5(e.target.value);e.currentTarget.nextSibling.focus()}}
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text]   sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%]"
                          maxLength="1"  />
                      <input
                          type="text" required onChange={(e)=>{setN6(e.target.value);}}
                          className="lg:w-14 lg:h-16 md:w-20 md:h-24 sm:w-16 sm:h-18 max-sm:w-12  max-sm:h-14 max-sm:rounded-[10px] rounded-[20px] text-center  bg-[--primary] bg-opacity-[0.13] border-[4px]  hover:border-[--secondary] focus-within:border-[--secondary] text-[--text]   sm:p-4 outline-none focus:bg-[--secondary] focus:bg-opacity-[6%] "
                          maxLength="1"  />
                  </div>
                  <p className='Body_02 max-sm:Body_03 max-sm:my-4 pt-[4%]'>Valid for {min}:{sec <10 ? "0"+sec: sec}</p>
                  
                  <p className='Body_02 max-sm:Body_03 max-sm:my-4 md:pt-[2%] pb-[5%] text-[#0E7E83]'>
                      <button onClick={(e)=>{
                        e.preventDefault();
                        location.reload();
                      }}
                      disabled={!(min===0 && sec===0)} className={`disabled:text-[#00021F]`} >Resend Code</button>
                  </p>
                  <button onClick={(e)=>{ }} 
                  className="bg-[--text] text-white border border-[--primary] rounded-full shadow-md shadow-[rgb(54,35,50)] hover:bg-opacity-80
                  2xl:xxl_Input_Size 
                  xl:xl_Input_Size 
                  lg:lg_Input_Size lg:Body_02
                  md:md_Input_Size md:Body_Bold_03 
                  sm:sm_Input_Size 
                  max-sm:mobile_Input_Size 
                  mt-[2%]
                  ">Verify</button>
              </form>
          </section>
          </div>
         {popUp==='Success' ? <PopUpNotification title={popUp} desc={popDesc} buttonText={"Continue"} buttonClassName={"text-[#2BE784]"} setClosePop={setPopUp} navigation={()=>{ if (verified.current)nav('/'); }}/> :
                  popUp ? <PopUpNotification title={popUp} desc={popDesc} buttonText={"Dismiss"} buttonClassName={"text-[#E55B5B]"} setClosePop={setPopUp}/> : "" }
  </div>
  )




}

export default AccountVerfication