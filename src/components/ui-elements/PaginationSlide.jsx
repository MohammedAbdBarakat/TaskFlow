import React from 'react'

const PaginationSlide = ({value, onClickBTNleft,btnLeftText,onClickBTNRight, btnRightText}) => {
  // This component is responsible only for displaying and running the btns func

  return (
    <section className="flex h-full justify-end py-3 lg:Body_03">
    <div className='w-full h-fit flex items-center justify-between bg-Noise2 bg-[--text] rounded-full'>
      <button onClick={onClickBTNleft}
      className="bg-[--text] drop-shadow-xl w-2/5  p-[1%] text-white border border-[--primary] rounded-full shadow-md shadow-[rgb(54,35,50)] hover:-translate-x-4  active:translate-x-0 active:rotate-0 active:duration-100 duration-300 " >{btnLeftText}</button>
        <p className="px-3 border-x-4 border-[--text]  bg-transparent backdrop-blur-[1px] flex items-center text-white" > <span> {value}</span></p>
      <button onClick={onClickBTNRight} 
          className="bg-[--text] drop-shadow-xl w-2/5  p-[1%] text-white border border-[--primary] rounded-full shadow-md shadow-[rgb(54,35,50)] hover:translate-x-4  active:translate-x-0 active:rotate-0 active:duration-100 duration-300" >{btnRightText}</button>
    </div>
    <div className='w-[4%]'></div>
  </section>

  )
}

export default PaginationSlide