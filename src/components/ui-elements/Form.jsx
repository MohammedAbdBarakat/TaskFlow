import React from 'react'
import InputForm from './InputForm'
import { Link } from 'react-router-dom'
import WarningLabel from './WarningLabel'


const Form = ({formText , inputData , links, buttonText , buttonOnClick ,invalidField=false }) => {
    /*
        input data[
            {
                labelText , inputType , imgIcon , placeholder, value , setValue, required
            }
        ]
        links[
            {text,linkText , navigation},
        ]
    */

   const Inputs=inputData!=undefined&&inputData.map((input , i)=>{
    return <InputForm key={i} labelText={input.labelText} inputType={input.inputType} imgIcon={input.imgIcon} placeholder={input.placeholder} value={input.value} setValue={input.setValue} required={input.required} />
   })
   const Links=links!=undefined && links.map((link,i)=>{
    return  <p key={i} className="xl:Body_03 lg:Body_04 md:Body_05 sm:Body_06 py-[2%] text-center"> 
                {link.text}
      <span className="text-[--text] font-bold hover:opacity-70 uppercase whitespace-nowrap"> 
        <Link to={link.navigation}> {link.linkText}</Link>
      </span> 
    </p>
   })




    return (
          <form className='flex flex-col items-center gap-2  max-md:sm:mt-[7%] max-md:sm:pt-[4%] p-[1.5%] py-[2%] border-[8px] border-[--text] rounded-[32px] backdrop-blur-[12px] shadow-2xl drop-shadow-xl
          xl:w-2/5
          max-xl:w-1/2 
          max-sm:w-[85%]
          max-sm:py-8
          '>
            <h1 className='xl:Heading_02 lg:Heading_03 md:Heading_04 max-md:Heading_05 text-[--text] text-opacity-85 drop-shadow'>{formText}</h1>
            {Inputs}
            {invalidField && <WarningLabel title={invalidField} />}

                <div className="flex flex-col-reverse items-center justify-center gap-5 py-[4%]  ">
                  <div className="text-start flex flex-col pt-[2%] ">
                     {Links}
                  </div>
                  <button onClick={(e)=>{buttonOnClick(e);}} 
                  className="bg-[--text] text-white border border-[--primary] rounded-full shadow-md shadow-[rgb(54,35,50)] hover:bg-opacity-80
                  2xl:xxl_Input_Size 
                  xl:xl_Input_Size 
                  lg:lg_Input_Size lg:Body_02
                  md:md_Input_Size md:Body_Bold_03 
                  sm:sm_Input_Size 
                  max-sm:mobile_Input_Size 
                  mt-[2%]
                  ">
                  {buttonText}</button>
                </div>
          </form>
        )
}

export default Form;