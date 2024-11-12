import React, { useEffect, useState } from 'react'
import TitledList from './TitledList';
import * as lux from "luxon";
import useAuth from '../../hooks/useAuth';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';


const ThisWeek = () => {

    const [tasks , setTasks]= useState([]);
    const axiosPrivate= useAxiosPrivate();
    const {auth} = useAuth();
    const [dt,setDt] = useState(lux.DateTime.now());
    const [Days,setDays]=useState(['']);

    const ThisWeekNumber=lux.DateTime.now().weekNumber;
    
    
    
    useEffect(()=>{
        const startOfWeek = dt.startOf('week', {useLocaleWeeks: true}).toISODate();
        const endOfWeek = dt.endOf('week' ,{useLocaleWeeks: true}).toISODate();
        setDays([  
            startOfWeek, //Monday
            lux.DateTime.fromSQL(startOfWeek).plus({'day':1}).toISODate(), //Tuesday
            lux.DateTime.fromSQL(startOfWeek).plus({'day':2}).toISODate(), //Wen
            lux.DateTime.fromSQL(startOfWeek).plus({'day':3}).toISODate(), //Thu
            lux.DateTime.fromSQL(startOfWeek).plus({'day':4}).toISODate(), //Fri
            lux.DateTime.fromSQL(startOfWeek).plus({'day':5}).toISODate(), //Sat
            endOfWeek //Sun
        ]);
        try {

            const getTask=async()=>{
                try {
                    const res = await axiosPrivate.get("/tasks/range" , {
                        withCredentials:true,
                        headers:{
                            _id: auth.id,
                            d1:startOfWeek,
                            d2:endOfWeek,
                        }
                    });
                    if (res.status===200 || res.statusText==='OK'){
                            setTasks(res.data);
                    }
                    else if (res.status === 500){
                        console.log(res.data);
                    }
                    else if (res.status === 204){
                        console.log(res.data);
                    }
                } catch (error) {
                    console.log(error);

                }
            };
            getTask();
        } catch (error) {
            console.log(error);
        }
    },[dt]);

    
    

  return (
    <div className="flex-1 overflow-auto p-4">                 
                  <section id="calendarWeek" className="flex flex-col grow">
                    <section id="Mon" className="py-2 border-y-4 border-teal-600 rounded-t-xl">
                        <h3 className="font-semibold py-1">Monday</h3>  
                        <TitledList data={ tasks.filter(task=>task.date===Days[0]) }/>    

                    </section>
                    <section id="Tue" className="py-3 border-b-4 border-teal-600">
                        <h3 className="font-semibold py-1">Tuesday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[1]) }/>    


                        
                    </section>
                    <section id="Wen"className="py-3 border-b-4 border-teal-600">
                        <h3 className="font-semibold py-1">Wensday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[2]) }/>    
                    
                    </section>
                    <section id="Thu" className="py-3 border-b-4 border-teal-600">
                        <h3 className="font-semibold py-1">Thursday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[3]) }/>    
                        
                    </section>
                    <section id="Fri" className="py-3 border-b-4 border-teal-600 " >
                        <h3 className="font-semibold py-1">Friday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[4]) }/>    
                    
                    </section>
                    <section id="Sat" className="py-3 border-b-4 border-teal-600 " >
                        <h3 className="font-semibold py-1" >Saterday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[5]) }/>    


                    </section>
                    <section id="Sun" className="py-3 border-b-4 border-teal-600 rounded-b-xl">
                        <h3 className="font-semibold py-1">Sunday</h3>
                        <TitledList data={ tasks.filter(task=>task.date===Days[6]) }/>    

                        
                    </section>
                  </section>
              </div>

    )
}

export default ThisWeek