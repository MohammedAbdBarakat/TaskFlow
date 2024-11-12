import assets from "../assets/assest"
import MenuDropDown from "../components/MenuDropDown";
import React, { useState } from 'react'
import Tasks from "./Homepage/Tasks";
import Months from "./Homepage/Months";
import Challenges from "./Homepage/Challenges";
import Journalling from "./Homepage/Journalling";


const Home = () => {
  //Used for navBar Button for small sized screen
  const [open,setOpen]=useState(true); 

  //Used for inside navigation between task month....etc  
  const [loaded , setLoaded]=useState(1);



  return (<>
    <img  alt="" className="bg-Noise1 fixed -z-20 w-screen h-screen bg-[--body-bg-color]" />
    <header className='sticky top-0 z-[100] w-screen 2xl:h-24 xl:h-20 lg:h-[74px] md:h-[68px] max-md:h-20 '>
       <div className="size-full flex max-md:justify-between bg-Noise2 bg-[--primary] ">
        {/* Icon */}
        <div className="w-[10%] max-md:w-[30%] h-full ml-[3%] backdrop-blur-sm ">
          <img src={assets.LogoTF} className="h-full " />
        </div>
        <div className="md:w-[15%]"></div>
        <nav className="flex flex-grow items-center justify-evenly whitespace-nowrap text-[--text] 
        2xl:Heading_Bold_03 xl:Heading_Bold_04 lg:Heading_Bold_05 md:Heading_Bold_06 max-md:Heading_Bold_07 max-md:hidden">
          {/* Add links or hrefs */}
        </nav>
        <nav className="md:hidden w-2/3 flex justify-between">
          <button onClick={()=>{setOpen(!open)}}
                className={`h-full w-[30%] relative flex justify-between items-center  ${open ? "toggle-btn" : ""}`}>
                    <div id="iconic"
                         className={`"z-10   
                            max-md:ml-2 
                            max-md:w-1/2 
                         absolute top-1/2 h-1  rounded bg-[--text]  duration-500  
                         before:absolute before:h-1 before:w-[150%] before:-translate-x-[50%] before:-translate-y-3 before:rounded before:bg-[--text] before:transition-all before:duration-200
                         after:absolute after:h-1 after:w-[150%] after:-translate-x-[50%] after:translate-y-3 after:rounded after:bg-[--text] after:transition-all after:duration-200" ${open ? "opacity-0" : "opacity-100"}  `}>
                         </div>
                         <img id="iconic" src={assets.alarmIcon2} alt="" className={`h-2/3 pl-[8%] duration-500 opacity-400 ${!open? "opacity-0":""}`} />

                         <MenuDropDown open={open} />
          </button>
        </nav>


      </div>
    </header>
    <main className="w-screen 
    2xl:xxlAuthHeights xl:xlAuthHeights lg:lgAuthHeights md:mdAuthHeights sm:smAuthHeights max-sm:mobileAuthHeights
    bg-Noise1 bg-[--body-bg-color] lg:lgNavHomeHeights xl:xlNavHomeHeights 2xl:xxlNavHomeHeights" > 

    <div className='flex'>
      <div id='navigations' className='lg:pl-2 flex justify-start items-center backdrop-blur-sm w-screen'>
        <button onClick={()=>{setLoaded(1)}} className='lg:w-[10%] lg:py-[1%] lg:my-[0.5%] lg:mx-[0.2%] border border-b-[5px] border-[--text] rounded-b-2xl drop-shadow-md backdrop-blur-xl hover:border-b-[2px]  hover:border-t-[3px]  hover:scale-105 duration-200 ' >Tasks</button>
        <button onClick={()=>{setLoaded(2)}} className='lg:w-[10%] lg:py-[1%] lg:my-[0.5%] lg:mx-[0.2%] border border-b-[5px] border-[--text] rounded-b-2xl drop-shadow-md backdrop-blur-xl hover:border-b-[2px]  hover:border-t-[3px]  hover:scale-105 duration-200 ' >Month</button>
        <button onClick={()=>{setLoaded(3)}} className='lg:w-[10%] lg:py-[1%] lg:my-[0.5%] lg:mx-[0.2%] border border-b-[5px] border-[--text] rounded-b-2xl drop-shadow-md backdrop-blur-xl hover:border-b-[2px]  hover:border-t-[3px]  hover:scale-105 duration-200 ' >Challenges</button>
        <button onClick={()=>{setLoaded(4)}} className='lg:w-[10%] lg:py-[1%] lg:my-[0.5%] lg:mx-[0.2%] border border-b-[5px] border-[--text] rounded-b-2xl drop-shadow-md backdrop-blur-xl hover:border-b-[2px]  hover:border-t-[3px]  hover:scale-105 duration-200 ' >Journalling</button>
      </div>  
    </div>    
      {loaded===1 ? <Tasks/> :
        loaded===2 ? <Months/> :
          loaded===3 ? <Challenges/> :
          loaded===4 && <Journalling/>}
    </main></>
  )
}

export default Home