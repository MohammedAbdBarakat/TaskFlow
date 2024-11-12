import React, { useCallback, useEffect, useState } from 'react'
import RoutineInput from './RoutineInput';
import RoutineEdit from './RoutineEdit';
import { nanoid } from '@reduxjs/toolkit';
/*
 1: Success
 0: No taskId
-1: Missing Data
-2: Invalid Time
-3: Conflict
-4: Fetching Error
*/

const DayRoutine = ({dayName, readOnly , setPopUp}) => {
    //dayName is used for API to get the data for determined day.
    //Fake
    const [data,setData]=useState([
        { _id:"12345",title:"GYM", startDate:"04:00" , endDate:"07:00"},
        { _id:"1234",title:"Shower and Rest", startDate:"07:00" , endDate:"08:00"},
        { _id:"123",title:"College", startDate:"08:00" , endDate:"14:00"}
    ]);
    const [conflictedIndex,setConflictedIndex]=useState([]);
    useEffect(()=>{
        //Make call RoutineGetDay API , Send {day:dayName} in header

    },[dayName]);  
    useEffect(()=>{
        console.log(conflictedIndex);
    },[conflictedIndex])  
    
    
    const sorter=useCallback((r1,r2)=>{
        const R1=Number(r1.endDate.substring(0,2)) + Number(r1.endDate.substring(3))/60;
        const R2=Number(r2.startDate.substring(0,2)) + Number(r2.startDate.substring(3))/60;
        return R1-R2;
    },[]);
    const toMinNumber=(time)=>{
        return Number(time.substring(0,2)) + Number(time.substring(3))/60; 
    };
    const checkTime=useCallback((startDate,endDate)=>{
        const h1=toMinNumber(startDate);
        const h2=toMinNumber(endDate)
        return (h2-h1);
    },[]);
    const conflictions=useCallback((startDate,endDate,_id)=>{
        console.log("Conflict Processsing ");
        let indexes=[];
        const start=toMinNumber(startDate);
        const end=toMinNumber(endDate);
        data.filter((r)=>{
            console.log(r);
            if (r._id ===_id) //This to avoid comparing the same time each other.
                return;
            const RStart=toMinNumber(r.startDate);
            const REnd=toMinNumber(r.endDate);

            if (RStart ==start || REnd==end)
                indexes.push(r._id);
            else if (RStart>start && RStart<end)
                indexes.push(r._id);
            else if (start>RStart){
                    if (start<REnd) 
                        indexes.push(r._id);
            }else if (start<RStart){
                    if (end>RStart) 
                        indexes.push(r._id);
            }
        });
        setConflictedIndex(indexes);
        if (indexes.length >0)
            return true;
        else 
            return false;
    },[data]);
    const routineValidator=(routine)=>{
        if (routine.startDate==undefined || routine.startDate=="" || routine.title=="" || routine.title==undefined ||routine.endDate==undefined||routine.endDate=="") 
            return -1;
        if (checkTime(routine.startDate,routine.endDate)<0)
            return -2;
        if (conflictions(routine.startDate,routine.endDate , routine._id || undefined))
            return -3;
        
        if (!routine._id)
            return 0;
        return 1;
    };


    const handleAddRoutine=async(title,startDate,endDate)=>{
        let _id=nanoid();
        const check=routineValidator({title,startDate,endDate,_id});
        if (check>=0)
            setData([...data, {title , startDate,endDate , _id  }])
        setPopUp(check);
    } 
    const handleEditRoutine=async(_id,{title,startDate,endDate})=>{
        const check=routineValidator({ _id,title,startDate,endDate});
        if (check==1){
            console.log("Check")
            setData([...data.filter(task=>task._id!==_id) , {_id, title , startDate , endDate}].sort(sorter));
        }
        setPopUp(check);
    }
    const handleRemoveRoutine=async(id)=>{
        if (!id)
            setPopUp(0);
        else{
            setData(data.filter(task=>task._id!==id));
            setPopUp(1);
        }
            
    }
  
   return (
    <div className='lg:pt-[0%] lg:mx-[3%] backdrop-blur-[3px] border-x-[4px] border-[--secondary]  duration-500 h-svh drop-shadow-sm group'>
        <h2 className='lg:Body_Bold_03 xl:Body_Bold_02 2xl:Body_Bold_01 text-center text-[--text] backdrop-blur-[8px] border-b-[3px] border-[--text] rounded-b-xl drop-shadow py-7 items-center -mx-1 '>{dayName}</h2>
        
         {readOnly!==true && <div className='pt-4 pb-2 border-b border-[--primary]'>
            <RoutineInput addRoutine={handleAddRoutine}/>
        </div>}
        {data.map((routine)=>{
            return <RoutineEdit key={routine._id} routine={routine} editAble={!readOnly} handleDelete={handleRemoveRoutine} handleEditRoutine={handleEditRoutine}/>
        })}
    </div>
  )
}

export default DayRoutine