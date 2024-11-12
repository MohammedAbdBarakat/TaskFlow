import React from 'react'
import assets from "../../assets/assest";

const WarningLabel = ({title}) => {
    
    
    return<div className='flex justify-center'>
            <div className="flex  lg:border-4 border-2 border-[--text]  shadow-sm lg:shadow-[#--text] items-center
            xl:gap-[29px] xl:p-4 xl:mt-4 xl:mr-6 lg:bg-opacity-0 lg:rounded-md
            md:gap-[18px] sm:p-2 sm:mt-2  md:bg-opacity-40 md:rounded-xl
            max-sm:gap-[18px] max-sm:p-2 max-sm:mt-2 max-sm:bg-opacity-40 max-sm:rounded-xl max-sm:pr-5 ">
                <img src={assets.Ic_warn} alt="Warning Icon" width={33} height={26} className='2xl:w-[33px] 2xl:h-[26px] lg:w-[33px] lg:h-[20px] md:w-[26px] md:h-[19px] sm:w-[30px] sm:h-[25px] '  />
                <p className="2xl:Body_02 xl:Body_03 md:Body_04 text-[--text] "> {title}</p>
            </div>
    </div>
}

export default WarningLabel