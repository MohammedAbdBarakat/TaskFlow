import React, { useState } from 'react'
import {DateTime} from "luxon";
import PaginationSlide from '../../components/ui-elements/PaginationSlide';
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




const Journalling = () => {

  //Fake Tasks Data
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
  const [noteSection ,setNoteSection]= useState(false);


  const [dt,setDt]=useState(DateTime.now());
  const maxWeekNumberAllowedForJournaling=DateTime.now().weekNumber;
  // Journal ID
  const [j_Id ,setJ_Id]=useState("");
  // GoodEvents
  const [gevent1 ,gsetEvent1]=useState("");
  const [gevent2 ,gsetEvent2]=useState("");
  const [gevent3 ,gsetEvent3]=useState("");
  //BadEvents
  const [bevent1 ,bsetEvent1]=useState("");
  const [bevent2 ,bsetEvent2]=useState("");
  const [bevent3 ,bsetEvent3]=useState("");
  // Notes:
  const [note,setNote]=useState("") ;

// Explanation:
/*
  We makes a call to Journ API to check it there is a journal (In order to give the user the ability to edit it).
  and the Save btn is used either a post or a put , Let's consider the next scenarios:
    1: if there is Journal, ( We know that using j_Id that is setted inside useEffect with GET Journal ) 
      then j_Id has a value, so that :
        we need to use gsetEvent , bsetEvent and setNote to display them to user.
      then the Save btn must make a PUT or Patch calls depend on what API offers to us.
    2: j_Id is "" or null or undefined Whatever , then we make a POST Journal API call and waiting to get its new _id to set it to j_id.

  */

  const handleSaveBTN=async()=>{

    if (j_Id){
      console.log("Make PUT or PATCH Call");
    }else {
      console.log("Make POST Call");
    }
  
  }




  const handleNextWeek=async()=>{
    //You can't add journals to future week !
    if (dt.weekNumber===maxWeekNumberAllowedForJournaling){
      alert("This week is your current week!");
      return;
    }
    // If call success and tasks are updated then :
    setDt(dt.plus({week:1}));
  
  }
  const handlePrevWeek=async()=>{
    // If call success and tasks are updated then :
    setDt(dt.plus({week:-1}));
  }


  return (
      <article className='flex flex-row-reverse w-screen lg:lgNavHomeHeights xl:xlNavHomeHeights 2xl:xxlNavHomeHeights'>
        {/* Form Submittion && Data Displaying */}
        <section className='w-3/5 h-full'>
          {/* Pagination */}
          <div className='h-[8%]'>
            <PaginationSlide value={`${dt.weekNumber}`} btnLeftText={"Prev Week"} btnRightText={"Next Week"} onClickBTNRight={()=>{handleNextWeek()}} onClickBTNleft={()=>handlePrevWeek()}  />
          </div>

          <form className='h-[82%]'>
            {/* Events */}
            {!noteSection&&<>
            <div className='flex flex-col h-[45%] justify-around  border-y-2 border-[--text] rounded-lg m-3 shadow-lg backdrop-blur-3xl focus-within:scale-105 duration-75'>
              <h3 className='lg:Body_Bold_03 text-[--text3]'>Good Events happened for this week :</h3> 
              <div className='flex flex-col lg:Body_03 justify-between text-[--text3]'>
                <label htmlFor="">Event 1:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
                <label htmlFor="">Event 2:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
                <label htmlFor="">Event 3:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
              </div>
            </div>
            <div className='flex flex-col h-[45%] justify-around  border-y-2 border-[--text] rounded-lg m-3 shadow-lg backdrop-blur-3xl focus-within:scale-105 duration-75'>
              <h3 className='lg:Body_Bold_03 text-[--text3]'>Bad Events happened for this week :</h3> 
              <div className='flex flex-col lg:Body_03 justify-between text-[--text3]'>
                <label htmlFor="">Event 1:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
                <label htmlFor="">Event 2:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
                <label htmlFor="">Event 3:</label>
                <input type="text"  id="" className="outline-none rounded-r-full rounded-l-xl mb-2 p-[0.2%] px-2 w-[90%] self-center bg-[--text] bg-Noise2 text-[#fffff9] " />
              </div>
            </div>
            </>}
            {/* Note */}
            {noteSection &&<>
            <div className='h-[95%]'>
              <div className='flex flex-col h-full justify-around border-y-2 border-[--text] rounded-lg m-3 shadow-lg backdrop-blur-3xl focus-within:scale-105 duration-75'>
              <label htmlFor="desc" className='lg:Body_02 2xl:Body_01 pl-2'>Notes</label>
              <textarea name="desc" id="desc"  className='text-white lg:Body_Bold_03 2xl:Body_Bold_2 outline-none rounded-2xl bg-[--text] bg-Noise2 h-2/3 w-5/6 self-center mt-2 p-1'></textarea>
            </div>
            </div>
            </>}
            {/* Btns */}
            <div className='h-[16%] -my-2 flex justify-around lg:Body_03 xl:Body_02'>
              <button className='bg-Noise2 bg-[--secondary] w-1/3 rounded-l-2xl h-1/2 self-center hover:scale-110 hover:-translate-y-1 duration-200 hover:translate-x-2 active:scale-90 active:translate-y-0'
              >Save Journal</button>
              <button className='bg-Noise2 bg-[--secondary] w-1/5 rounded-2xl h-1/2 self-center hover:scale-110  duration-200 active:scale-90' onClick={(e)=>{e.preventDefault(); setNoteSection(!noteSection);}} >{noteSection===false ? "Note" : "Events"}</button>
              <button className='bg-Noise2 bg-[--secondary] w-1/3 rounded-r-2xl h-1/2 self-center hover:scale-110 hover:-translate-y-1 duration-200 hover:-translate-x-2 active:scale-90 active:translate-y-0' 
              >Clear</button>
            </div>
          </form>

        </section>

        {/* Tasks data for this week */}
        <section className='w-2/5 flex flex-col h-full '>
          <DayTask data={data[0]} readOnly={true}/>
          <DayTask data={data[1]} readOnly={true}/>
          <DayTask data={data[0]} readOnly={true}/>
          <DayTask data={data[2]} readOnly={true}/>
          <DayTask data={data[0]} readOnly={true}/>
          <DayTask data={data[0]} readOnly={true}/>
          <DayTask data={data[0]} readOnly={true}/>
        </section>
      </article>
    )
}

export default Journalling