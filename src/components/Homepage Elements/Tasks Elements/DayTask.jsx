import React from 'react'
import TaskItem from '../TaskItem'
import { useNavigate } from 'react-router-dom';

const DayTask = ({data ,readOnly}) => {
        console.log(data);


        /*
        This component is responsible for :
        1- Navigate func
        2- Complete func
        3- Mapping data 
        
        */

        // const nav=useNavigate();
        const handleNavigate=(id)=>{
            console.log("Navigate to ", id)
            // nav(`/tasks/id:${id}`);
        }
        
        const handleComplete=async(id)=>{
            console.log("Make Completion" , id);
        }



    return (
    <div className='flex h-full w-full items-center  '>
        {/* Day Name  */}
        <section className='w-[20%] relative h-full  mb-2 flex items-center'>
            <div className='flex items-center justify-center size-[90%] rounded-r-2xl border-l-0 border-r-[6px] border-y-2 bg-[--text0] border-[--secondary] bg-Noise2 hover:scale-x-110 origin-top-left duration-100'>
                <h2 className='lg:Body_04 xl:Body_03 2xl:Body_02 '>
                    {data.day}
                </h2>
            </div>

        </section>
        {/* Tasks */}
        <section className='w-[80%] h-full '>
            <div className='flex items-center justify-center size-[90%] w-[97%] border-l-0 border-y-2 rounded-xl bg-[--text0] border-[--secondary] bg-Noise2'>
                <div className='flex items-center gap-[2%] w-full overflow-x-scroll overflow-scroll overflow-y-hidden scroll-smooth '>
                    {/* This div is added just to fix flex */}
                    <div></div>
                    {data.tasks.map(task=>{
                        const Task={
                            title:task.title, 
                            complete:task.complete, 
                            desc:task.desc, 
                            importance:task.importance, 
                            type:task.type, 
                            startDate:task.startDate,
                            startTime:task.startTime, 
                            endTime:task.endTime, 
                            
                        }

                       return <TaskItem key={task._id} task={Task} readOnly={readOnly} handleComplete={()=>handleComplete(task._id)} handleNavigate={()=>handleNavigate(task._id)}/>
                    })}
                </div>
            </div>
        </section>

    </div>
  )
}

export default DayTask