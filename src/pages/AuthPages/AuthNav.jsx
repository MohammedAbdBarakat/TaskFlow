import assets from "../../assets/assest"
import { Outlet,Link } from 'react-router-dom'
import React from 'react'
import "../../index.css";

const AuthNav = () => {

/*
2xl 1566
xl: 1280
lg: 1024
md:  768
sm:  640
*/

  return (
    <>
    <img  alt="" className="bg-Noise1 fixed -z-10 w-screen h-screen bg-[--body-bg-color]" />
    <header className='sticky top-0 z-[100] w-screen 2xl:h-24 xl:h-20 lg:h-[74px] md:h-[68px] sm:h-16 max-sm:h-20 '>
      <div className="size-full  flex justify-between items-center bg-Noise2 bg-[--primary] ">
        {/* Icon */}
        <div className="sm:w-[10%] max-sm:backdrop-blur-md  h-full ml-[3%] rounded-full">
          <img src={assets.LogoTF} className="h-full " />
        </div>
        <nav className="text-[--text] pr-4 
          2xl:Heading_Bold_03 xl:Heading_Bold_04 lg:Heading_Bold_05 md:Heading_Bold_06 max-md:Heading_Bold_07 ">
          <Link to={"/"}>Home</Link>
        </nav>
      </div>
    </header>
    <main className="w-screen
    2xl:xxlAuthHeights xl:xlAuthHeights lg:lgAuthHeights md:mdAuthHeights sm:smAuthHeights max-sm:mobileAuthHeights" > 
        <Outlet />
    </main>
    </>

    )
}

export default AuthNav