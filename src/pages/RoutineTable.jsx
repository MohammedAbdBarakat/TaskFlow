import React, { useEffect } from 'react'
import assets from '../assets/assest'
import DayRoutine from '../components/ui-elements/Routine/DayRoutine';
import PopupRoutine from '../components/ui-elements/Routine/PopupRoutine';
import { useState } from 'react'

const RoutineTable = ({readOnly}) => {
  const [popUp, setPopUp]=useState(false);

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
        <main className='w-screen h-fit overflow-auto'>
          <div  className='md:min-w-[1200px] lg:min-w-[1750px] xl:min-w-[2100px] 2xl:min-w-[2450px] grid grid-rows-1 grid-cols-7'>
            <DayRoutine dayName={"Saterday"} /*Carefull with dayName , used within to routineGetDay API */  readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Sunday"}     readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Monday"}     readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Tuesday"}    readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Wednesday"}  readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Thursday"}   readOnly={readOnly}  setPopUp={setPopUp} />
            <DayRoutine dayName={"Friday"}     readOnly={readOnly}  setPopUp={setPopUp} />
          </div>
          <PopupRoutine popUp={popUp} setClosePopup={setPopUp} />
        </main>
    </>

    )
}

export default RoutineTable