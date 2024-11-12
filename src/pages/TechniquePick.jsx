import React, { useEffect, useState } from 'react'
import assets from '../assets/assest'
import { useNavigate } from 'react-router-dom';
import { Techniques} from '../api/axios';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import useAuth from '../hooks/useAuth';
const TechniquePick = () => {
  const {auth} = useAuth();
  const [chosenTech , setChosenTech]=useState(1); //1 for EizenHower , 2 Complex tasks
  const nav=useNavigate();
  const axiosPrivate= useAxiosPrivate();

  useEffect(()=>{
    if (auth.currentTech);
  },[]);

  const handleSubmitTeck=async()=>{
    console.log("Chosen Teck: ", chosenTech);
    try {
      const res= await axiosPrivate.post(Techniques.updateTechniquesPOST , {technique :chosenTech}).then(res=>{
        if (res.status===200){
          nav("/");
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  
  }
  
  return (
    <>
      <img  alt="" className="bg-Noise1 fixed -z-20 w-screen h-screen bg-[--body-bg-color]" />
      <header className='w-screen 2xl:h-24 xl:h-20 lg:h-[74px] md:h-[68px] max-md:h-20 '>
         <div className="size-full flex max-md:justify-between bg-Noise2 bg-[--primary] ">
              {/* Icon */}
              <div className="w-[10%] max-md:w-[30%] h-full ml-[3%] backdrop-blur-sm ">
                <img src={assets.LogoTF} className="h-full " />
              </div>
          </div>
      </header>
      <main className='h-full flex flex-col items-center'>
        <h2 className='lg:Heading_03 xl:Heading_02 2xl:Heading_01'>Choose Organizing Technique</h2>
        <div className='flex flex-col justify-evenly items-center h-[65vh] w-[50vw] backdrop-blur-xl lg:Body_Bold_01 border-[10px] border-[--secondary] rounded-[50px] '>
          <button value={1} onClick={(e)=>{e.preventDefault(); setChosenTech(e.currentTarget.value)}} className={`w-fit p-4 hover:scale-110 duration-300 ${chosenTech==1? "border-4 border-[--primary] rounded-3xl my-2 text-[--text2]  scale-105": "text-[--text3]"} `} >EizenHower Technique</button>
          <button value={2} onClick={(e)=>{e.preventDefault(); setChosenTech(e.currentTarget.value)}} className={`w-fit p-4 hover:scale-110 duration-300 ${chosenTech==2? "border-4 border-[--primary] rounded-3xl my-2 text-[--text2]  scale-105": "text-[--text3]"} `} >Complex tasks Technique</button>
        </div>
        <div className='flex justify-between'>
          <button onClick={handleSubmitTeck} 
          className='lg:Heading_04 xl:Heading_03 2xl:Heading_02 text-[--text3] backdrop-blur-3xl mt-3 p-2 border-4 border-black duration-300 hover:border-[--error] hover:text-[--text4] rounded-2xl'>Save</button>
        </div>
      </main>
    </>
  )
}

export default TechniquePick