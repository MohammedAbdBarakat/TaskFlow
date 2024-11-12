import React, { useState } from 'react'
import assets from '../../../assets/assest';
const RoutineEdit = ({ routine , handleDelete , handleEditRoutine,editAble}) => {



    const [text,setText]=useState(routine.title);
    const [c1 , setC1] = useState(routine.startDate);
    const [c2 , setC2] = useState(routine.endDate);
    const [editMode,setEdit]=useState(false);
    return (
        <div className='flex flex-col justify-center py-2 border-b border-[--text]'>
            {/* Desc */}
            <section className='flex flex- items-center'>
                <input name="desc" id="desc" maxLength={30} readOnly={editAble===true && !editMode} value={text} onChange={e=>{e.preventDefault(); setText(e.target.value)}} 
                className={`w-[70%] ml-[4%] p-[2%] rounded-xl lg:Body_04 xl:Body_03 2xl:Body_02  ${!editMode ? "bg-inherit" : "bg-[--secondary]"}`}></input>
            { editAble===true &&
            <div className='flex w-[30%] lg:h-[33px] justify-around lg:mb-[4%] '>
                <button id='editBTN' className='size-full p-[3%]' 
                    onClick={()=>{
                        if (editMode){
                            console.log("Edited");
                            handleEditRoutine(routine._id , {title:text , startDate:c1 , endDate:c2});
                            setText(routine.title);
                            setC1(routine.startDate)
                            setC2(routine.endDate);
                        }
                    
                    setEdit(!editMode);
                }} >
                <img src={!editMode ? assets.editIcon: assets.saveIcon} alt="" className={`hover:scale-125 duration-300 cursor-pointer ${!editMode ? "hover:-rotate-12" : "hover:rotate-12"}`} 
                
                />
                </button>
                {editMode ? <button id='deleteBTN' className='size-full p-[3%]' onClick={(e)=>{handleDelete(routine._id);}} >
                 <img src={assets.deleteIcon} alt="" className='hover:scale-125 duration-300 cursor-pointer' />
                </button>: <div className='size-full'></div>}
            </div>
            }
            </section>
            {/* Dates */}
            <section className='flex w-full py-2 text-[--text3]'>
                <div className='flex flex-col w-1/2 items-center'>
                    <input type="time" name="c1" id="c1" readOnly={editAble===true && !editMode} value={c1} onChange={e=>{e.preventDefault(); setC1(e.target.value)}} className={`'outline-none lg:Body_05 xl:Body_04 2xl:Body_03 p-[3%] rounded-xl ' ${!editMode ? "bg-inherit":"bg-[--secondary]"}`}/>
                </div>
                <div className='flex flex-col w-1/2 items-center'>
                    <input type="time" name="c2" id="c2" readOnly={editAble===true && !editMode} value={c2} onChange={e=>{e.preventDefault(); setC2(e.target.value)}} className={`'outline-none lg:Body_05 xl:Body_04 2xl:Body_03 p-[3%] rounded-xl ' ${!editMode ? "bg-inherit":"bg-[--secondary]"}`}/>
                </div>
            </section>
        </div>
    )
}

export default RoutineEdit