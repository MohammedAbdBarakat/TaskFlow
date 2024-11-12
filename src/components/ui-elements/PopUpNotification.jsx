import React from 'react'

const PopUpNotification = ({title, desc , buttonText ,buttonClassName,setClosePop}) => {
  
    
    return (
        <div className=' fixed inset-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm z-50'>
            <div className='flex flex-col justify-evenly items-center relative z-20 shadow-inner border-e-emerald-600 rounded-[40px] py-5 p-2 text-center bg-[#fffff0] w-2/3 min-w-[350px] sm:w-2/3 sm:h-2/5 md:w-2/3 md:h-[290px] lg:w-1/3 xl:w-[584px] xl:h-[309px]  '>
                <p className='sm:Heading_Semi_Bold Heading_Bold_04 py-2'>{title}</p>
                <p className='Body_02 sm:max-w-[60%] max-w-[270px] text-[#3D624F]' >{desc}</p>
                <div className=' border-t-4  border-[#3D624F] border-opacity-50 
                w-[75%] 
                max-sm:h-1/2 max-sm:w-10/12 max-sm:pt-5 max-sm:my-5 '>
                </div>
                    <button className={`sm:Body_02 Body_03 `+buttonClassName } onClick={()=>{
                        setClosePop(false);
                        }}>{buttonText} </button>
            </div>
        </div>
        )
}

export default PopUpNotification