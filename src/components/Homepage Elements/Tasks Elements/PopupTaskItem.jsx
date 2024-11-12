import React from 'react'

const PopupTaskItem = ({ task,handleComplete, handleNavigate, setClose ,readOnly}) => {

    


  return (
   <div className=' fixed inset-0 flex justify-center items-center bg-opacity-25 backdrop-blur-sm z-50 -m-4'>
            <div className='flex flex-col justify-around items-center relative z-20 shadow-inner border-e-emerald-600 rounded-[40px] py-5 p-2 text-center bg-[#e296ecf3] w-3/4 h-2/3  '>
               {/* Data */}
               <section className='flex w-full h-2/3 border-b-4 border-[--text]'>
                    {/* title ,completion ,importance*/}
                    <div className='text-[--text] w-[30%] flex flex-col  justify-around border-r-4 border-[--text2]  '>
                        <p className={`Heading_Bold_03 w-full p-2 ${task.complete ? "text-[#361c3a]" : "text-[--text2]"} `}>
                        {task.title}
                        </p>
                        <p className='Body_03'>
                        {task.importance}
                        </p>
                        {task.complete? "Completion: Done":"Completion: Not yet"}
                    </div>
                    <div className='flex flex-col  w-[70%]'>
                        {/* Desc */}
                        <div className='size-full border-b-4 border-[--text]'>
                            <p className='Body_02 xl:Body_01 h-full flex justify-center items-center text-[--text2]' >{task.desc}</p>

                        </div>
                        {/* startDate ,startTime ,endTime ,type  */}
                        <div className='size-full '> 
                            {/* Start Date */}
                            <div className='flex items-center justify-around h-1/3'>
                                <div className='lg:Body_03 flex gap-2 text-[--text2]'>
                                Start Date:
                                    <p className='text-black'> {task.startDate}</p>
                                </div>
                                <div></div>
                            </div>
                            <div className='flex justify-around items-center h-2/3'>
                                <div className='flex gap-1 shadow-sm lg:Body_04 xl:Body_03'>
                                   <p className='text-[--text2]'>Start Time: </p> {task.startTime}
                                </div>
                                <div className='flex gap-1 shadow-sm lg:Body_04 xl:Body_03'>
                                    <p className='text-[--text2]'>End Time: </p> {task.endTime==="" ? "not specified" : task.endTime}
                                </div>
                                <div className='flex gap-1 shadow-sm lg:Body_04 xl:Body_03'>
                                    <p className='text-[--text2]'>Type: </p>
                                    {task.type}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Buttons */}
                <section className='w-full h-1/3 flex justify-around items-center border-b-4 border-[--text] px-2'>
                    { readOnly!==true && <>
                    <button className={`w-[20%] sm:Body_02 Body_03 rounded-xl p-4 active:bg-green-400 active:text-white ${task.complete ? "bg-green-400 hover:bg-green-400" :" bg-[--text] hover:bg-green-600 duration-150 hover:scale-110 hover:text-green-100"}`} disabled={task.complete}  onClick={()=>{ handleComplete();
                        }}>
                            {task.complete ?"Completed" :"Complete"}
                    </button>
                    <div className='h-full w-1 bg-[--text2] rounded-full'></div>
                    <button className={`w-[20%] sm:Body_02 Body_03  bg-[--text] hover:bg-[--text2] duration-150 hover:scale-110 hover:text-white rounded-xl p-4`} onClick={()=>{handleNavigate();
                        }}>
                            Edit
                    </button>
                    <div className='h-full w-1 bg-[--text2] rounded-full'></div>
                    </>}
                    <button className={`w-[20%] sm:Body_02 Body_03 bg-[--text] hover:bg-[--text2] duration-150 hover:scale-110 hover:text-white rounded-xl p-4`} onClick={()=>{
                        setClose();
                        }}>
                            Cancel
                    </button>
                </section>
            </div>
        </div>
  )
}

export default PopupTaskItem