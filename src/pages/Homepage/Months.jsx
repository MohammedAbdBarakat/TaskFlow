import React, { useEffect, useState } from 'react' ;
import {DateTime} from "luxon" ;
import DayTask from '../../components/Homepage Elements/Tasks Elements/DayTask';
import PaginationSlide from '../../components/ui-elements/PaginationSlide';

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
const Months = () => {
  /*
  This components is responsible for :
  1- Display only the existed tasks for months.
  2- Traversing Task Data depending on month number (using API). {nextMonth , prevMonth}
  */
  
  
  
  //Fake Data:
  const [data, setData]=useState({month:11 , tasks:[
    {day:1 , tasks:[
      { _id:"3",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
      { _id:"123",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
      { _id:"41",complete:false ,title:"College" , type:"Education" , desc:"Networks2 OS2 ..etc" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""}
    ]},
    {day:4, tasks:[
      { _id:"123",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
      { _id:"3",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
      { _id:"1",complete:true ,title:"WorkOUT" , type:"sport" , desc:"GO TO GYM AND PLAY" , importance:getImportance(2) ,startDate:"10/31/2024", startTime:"20:00" ,endTime:""  },
    ]}

  ]});
  const [dt,setDt] = useState(DateTime.now());

  const handleNextMonth=async()=>{

    //If call status is 200 and data is updated , Then 
    setDt(dt.plus({month:1}));
  }

  const handlePrevMonth=async()=>{

    //If call status is 200 and data is updated , Then 
    setDt(dt.plus({month:-1}));
  }



  return (
    <div className='lg:lgNavHomeHeights xl:xlNavHomeHeights 2xl:xxlNavHomeHeights '>
      {/* Pagination for months */}
      <div className=' h-[10%]'>
        <PaginationSlide value={dt.month} btnLeftText={"Prev Month"} btnRightText={"Next Month"} onClickBTNRight={()=>handleNextMonth()} onClickBTNleft={()=>handlePrevMonth()}/>
      </div>
      {/* Months Data */}
      <section className=' w-full h-[90%]   overflow-y-scroll overflow-scroll overflow-x-hidden scroll-smooth'>
      <div className='grid space-y-4'>
        <div></div>
        {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    {
      data.tasks.map((dayData)=>{
        const Data={
          day:dayData.day.toString(),
          tasks:dayData.tasks
        }
        return  <DayTask key={Data.day} data={Data}/>
      })
    }
    </div>
      </section>
    </div>
  )
}

export default Months