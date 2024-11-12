import React, { useState } from 'react'
import DayTask from '../../components/Homepage Elements/Tasks Elements/DayTask';

const getImportance= (imp)=>{
    switch(imp){
        case 1 :
            return "Important and Urgent";
        case 2 :
            return "Important and Not Urgent";
        case 3 :
            return "Not Important But Urgent";
        case 4 :
            return "Not Important Or Urgent";
        default:
        return "";
    }
}


const Tasks = () => {
    //Fake Data:
    const [data , setData]= useState([
        {
            day:"Saterday" , tasks:[
                { _id:"12",complete:false ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""},
                { _id:"34",complete:true ,title:"College" , type:"Education" , desc:"Networks2 OS2 ..etc" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""}
            ]
        },
        {
            day:"Sunday" , tasks:[
                { _id:"1",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
                { _id:"3",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
                { _id:"123",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
                { _id:"41",complete:false ,title:"College" , type:"Education" , desc:"Networks2 OS2 ..etc" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""}
            ]
        },
        {
            day:"Monday" , tasks:[]
        },
        
    ])

    /*This Component is responsible for 
    1- Sorting data from (start Day ,e.g., Saterday) to the end of week. 
    2- Passing each day data with it's name to the DayTask
    */


  return (
    <div className='lg:grid lg:grid-rows-7 lg:h-full bg-[--primary] border-y-[10px] border-[--primary] rounded-t-2xl '>
        <DayTask data={data[0]} />
        <DayTask data={data[1]}/>
        <DayTask data={data[0]} />
        <DayTask data={data[2]} />
        <DayTask data={data[0]} />
        <DayTask data={data[0]} />
        <DayTask data={data[0]} />

    </div>
  )
}

export default Tasks