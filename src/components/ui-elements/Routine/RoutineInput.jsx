import React, { useState } from 'react'
import assets from '../../../assets/assest';
const RoutineInput = ({addRoutine}) => {
    const [text,setText]=useState('');
    const [c1 , setC1] = useState('');
    const [c2 , setC2] = useState('');
    const clearInputs=()=>{
        setText("");
        setC1('');
        setC2('');
    }

    return (
        <div className='flex flex-col justify-center'>
            <h3 className='text-[--text3] lg:Body_05 xl:Body_04 2xl:Body_03 pl-1'>Description</h3>
            {/* Desc */}
            <section className='flex flex-col w-full items-center'>
                <textarea name="desc" id="desc" rows="2" value={text} onChange={e=>{e.preventDefault(); setText(e.target.value)}} className='bg-[--secondary] text-center w-[94%] rounded-xl'></textarea>
            </section>
            {/* Dates */}
            <section className='flex w-full justify-around py-2 text-[--text3]'>
                <div className='flex flex-col w-1/2 items-center'>
                    <label htmlFor="c1">Start:</label>
                    <input type="time" name="c1" id="c1" value={c1} onChange={e=>{e.preventDefault(); setC1(e.target.value)}} className='bg-[--secondary] outline-none lg:Body_04 xl:Body_03 2xl:Body_02 p-[2%] rounded-xl'/>
                </div>
                <div className='flex flex-col w-1/2 items-center'>
                    <label htmlFor="c2">End:</label>
                    <input type="time" name="c2" id="c2" value={c2} onChange={e=>{e.preventDefault(); setC2(e.target.value)}} className='bg-[--secondary] outline-none lg:Body_04 xl:Body_03 2xl:Body_02 p-[2%] rounded-xl'/>
                </div>
            </section>
            
            {/* Button */}
            <section className='flex w-full'>
                <button className='flex justify-around w-full items-center group pt-1' onClick={e=>{e.preventDefault();  console.log(addRoutine(text,c1,c2))}}>
                    <h3 className='text-[--text] lg:Body_04 xl:Body_03 2xl:Body_02 text-start pl-2  group-focus:translate-x-3.5 duration-200'>Add Routine </h3>
                    <img id='iconic' src={assets.addBtnCircle} className='size-[40px] duration-200 group-focus:rotate-[180deg]' />
                </button>   
            </section>
        </div>
    )
}

export default RoutineInput