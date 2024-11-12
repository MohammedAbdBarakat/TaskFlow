import xIcon from "../assets/xIcon.svg";
import { Link } from "react-router-dom";
import React from 'react'
const MenuDropDown = ({open , setOpen , links, ahrefs}) => {

    let Links=links!=undefined&&links.map((link,i)=>{
      return <Link key={i} to={link.navigation}> {link.text} </Link>;
    })
    let Ahs=ahrefs!=undefined&& ahrefs.map((a,i)=>{
      return <a key={i} href={a.href}>{a.text}</a>;
    })

    return (
    <div className={`absolute z-[23] sm:right-0 scale-y-0  origin-top duration-500 cursor-default
    ${open ? "scale-y-[100%]" : "scale-y-0"}
    max-md:w-screen w-[55vw]  xl:w-[37vw]
    max-md:h-[55vh] h-[50vh]
    top-[100%]  
    max-sm:-right-[0%] 
     `}>
        <section className='relative'>
            <div className='absolute right-0 top-2 z-[1] cursor-pointer'>
                <img src={xIcon} className='xl:size-16 max-lg:sm:size-8' />
            </div>

        </section>
        <section className='flex flex-col justify-evenly text-center  z-[22] drop-shadow-2xl rounded-b-[40px] 
        backdrop-blur-sm text-[--text] 
        sm:gap-[1px] sm:py-[2%] sm:h-full
        gap-1 py-1  max-md:justify-evenly
        max-md:size-full
        Body_Bold_02
        '>
         {Links}
         {Ahs }
        </section>
        
    </div>
  )
}

export default MenuDropDown