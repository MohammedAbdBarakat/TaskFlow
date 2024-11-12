import assets from "../../assets/assest"
import { Outlet,Link } from 'react-router-dom'
import React, { useState } from 'react'
import "../../index.css";
import MenuDropDown from "../../components/MenuDropDown";


const WNav = () => {
  const [open,setOpen]=useState(true);
/*
2xl 1566
xl: 1280
lg: 1024
md:  768
sm:  640
           <a href="#story">Story</a>
          <a href="#users">Our Users</a>
          <a href="#purposes">Purposes</a>
          <a href="#future">Future</a>
*/
  const aHrefMenu=[
    { href:"#story",   text:"Story"},
    { href:"#users" ,  text:"Our Users"},
    { href:"#purposes",text:"Purposes"},
    { href:"#future"  ,text:"Future"}
  ]

  return (
    <>
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
          <a href="#story">Story</a>
          <a href="#users">Our Users</a>
          <a href="#purposes">Purposes</a>
          <a href="#future">Future</a>
          <div className="space-x-[15%] ">
            <Link to={"/auth"}>Login</Link>
            <Link to={'/auth/signup'} >Sign Up</Link>
          </div>
        </nav>
        <nav className="md:hidden w-2/3 flex justify-between">
          <div className="w-[40%] gap-6 whitespace-nowrap flex items-center text-[--text] Heading_Bold_05 font-['Lato'] ">
            <p><Link to={"/auth"}>Login</Link> </p>
            <p><Link to={'/auth/signup'} >Sign Up</Link> </p>
          </div>
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

                         <MenuDropDown open={open} ahrefs={aHrefMenu}/>
          </button>
          {/* <button className={`relative z-[10] bg-red-300 w-[25%] flex justify-center items-center ${open ? "toggle_btn" : ""}`} onClick={(e)=>{setOpen(!open);}}>
          <div></div>
          <div className="z-10  
                          w-[25%] 
                            max-md:ml-2 
                            max-md:w-1/2
                         absolute top-1/2 h-1 rounded bg-white duration-500 
                         before:absolute before:h-1 before:w-[100%] before:-translate-x-[50%] before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-400
                         after:absolute after:h-1 after:w-[100%] after:-translate-x-[50%] after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-400"></div>
          <img src={assets.alarmIcon} alt="" className={`h-2/3 duration-200 opacity-400 ${!open? "opacity-0":""}`} />
          <MenuDropDown open={open} setOpen={setOpen}/>
          </button> */}
        </nav>


      </div>
    </header>
    <main className="w-screen 
    2xl:xxlAuthHeights xl:xlAuthHeights lg:lgAuthHeights md:mdAuthHeights sm:smAuthHeights max-sm:mobileAuthHeights
    bg-Noise1 bg-[--body-bg-color] " > 
        <Outlet />
    </main>
    
    </>

    )
}

export default WNav