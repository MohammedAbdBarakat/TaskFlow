import React from 'react'

const InputForm = ({labelText ,inputType , imgIcon ,placeholder,required,value,setValue}) => {
  
    return (
    <div className='shadow-lg '>
        <h2 className="lg:Body_02 md:Body_03 sm:Body_04  py-[3%] ">{labelText}</h2>
        <div id={inputType}  className="flex bg-inherit rounded-xl border-2 border-black border-opacity-65
          2xl:xxl_Input_Size
          xl:xl_Input_Size
          lg:lg_Input_Size
          md:md_Input_Size
          sm:sm_Input_Size 
          max-sm:mobile_Input_Size
        ">
            <img src={imgIcon} alt="" width={26} height={26} className='mx-[2%]'/>
            <input onChange={(e)=>{setValue(e.target.value);}} value={value}  required={required}
                type={inputType} name={inputType} placeholder={placeholder} 
                className=" text-[#1b0b1a] flex-grow lg:Body_03 md:Body_04 rounded-r-full bg-transparent outline-none" />
        </div>

    </div>
  )
}

export default InputForm