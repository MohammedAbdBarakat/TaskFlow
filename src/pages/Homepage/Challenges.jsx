import React, { useState } from 'react'
import PopUpNotification from '../../components/ui-elements/PopUpNotification';
import ChallengeItem from '../../components/Homepage Elements/Challenges Elements/ChallengeItem';

const Challenges = () => {
  /*
    This component is responsible for :
      1- Getting Challenges (API get challenges calls);
      2- handleComplete challenge (API patch-put )
      3- handleDelete Challenge (API delete)
      4- handleSubmitChallenge (Adding challenge API post )
      5- 
  
  */






  const [challenges, setChallenges]=useState([
    {_id:"1",title:"Smoking", description:"Smoke only 30 ciggerates",isDone:true , completeDate:"2025/10/10"},
    {_id:"2",title:"Graduate", description:"Smoke Eat Sleep Code until success reach you",isDone:false , completeDate:undefined},
    {_id:"3",title:"Quiz", description:"Smoke only 50 ciggerates with Quizes",isDone:false , completeDate:undefined},
  ]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  // This is used for PopUpNotification elements which helps to notify user about operations such Completing/Adding Challenges. used along with Axios responses.
  const [popUp, setPopUp]=useState(false); //The popUp is Hidden iff it's value is false
  const [popUpDesc,setPopUpDesc]=useState("");
  // Just add the response content;(Depends on the )
  const handlePopUp=(statusCode,resData)=>{
    if (statusCode===200){
      setDescription(resData.message || "Operation Achieved successfully");
      setPopUp("Success");
    }else{

    }
  }




  const handleComplete=async(id)=>{
    console.log("Complete Challenge ", id);
  }
  
  const handleSubmitChallenge=async(e)=>{
    e.preventDefault();
    //Submitting using AxiosPrivate Hook.
    if (!title){
      setPopUpDesc("Please Title is required !")
      setPopUp("Missing Info");
      return;
    }
    console.log("Submitted");
  }
  return (
    <div className='w-screen lg:lgNavHomeHeights xl:xlNavHomeHeights 2xl:xxlNavHomeHeights flex flex-row-reverse'>
      {/*Contains Form For adding*/}
        <section className='flex h-full w-2/5 border-t-[4px] border-l-[4px] border-[--text] backdrop-blur-sm'>
          <form className='size-full'>
            {/* Title Input */}
            <div className='flex flex-col h-1/5 justify-center border-y-2 border-[--text] rounded-lg m-3 shadow-lg backdrop-blur-3xl focus-within:scale-105 duration-75'>
              <label htmlFor="title" className='lg:Body_02 2xl:Body_01 pl-2'>Challenge Title</label>
              <input type="text" id="title" onChange={(e)=>setTitle(e.target.value)}  value={title} className='lg:Body_Bold_03 2xl:Body_Bold_2 outline-none rounded-2xl bg-[--primary] bg-Noise1  w-3/4 self-center mt-2 p-1' required />
            </div>
            {/* Desc Input */}
            <div className='flex flex-col h-3/5 justify-around border-y-2 border-[--text] rounded-lg m-3 shadow-lg backdrop-blur-3xl focus-within:scale-105 duration-75'>
              <label htmlFor="desc" className='lg:Body_02 2xl:Body_01 pl-2'>Description</label>
              <textarea name="desc" id="desc" value={description} onChange={(e)=>{setDescription(e.target.value)}} className='lg:Body_Bold_03 2xl:Body_Bold_2 outline-none rounded-2xl bg-[--primary] bg-Noise1 h-2/3 w-5/6 self-center mt-2 p-1'></textarea>
            </div>
            {/* SubmitBTN */}
            <div className='h-1/6 -my-5 flex justify-around lg:Body_03 xl:Body_02'>
              <button className='bg-Noise2 bg-[--secondary] w-1/3 rounded-l-2xl h-1/2 self-center hover:scale-110 hover:-translate-y-1 duration-200 hover:translate-x-2 active:scale-90 active:translate-y-0' onClick={(e)=>{handleSubmitChallenge(e);}}>Add Challenge</button>
              <button className='bg-Noise2 bg-[--secondary] w-1/3 rounded-r-2xl h-1/2 self-center hover:scale-110 hover:-translate-y-1 duration-200 hover:-translate-x-2 active:scale-90 active:translate-y-0' onClick={(e)=>{e.preventDefault(); setTitle(""); setDescription("");}}>Clear</button>
            </div>
          </form>
        </section>
      {/* Contains the existed Challenges data */}
        <section className='w-3/5  overflow-y-scroll overflow-scroll overflow-x-hidden scroll-smooth pt-[3%]'>
          {challenges.map(challenge=>{
            return <ChallengeItem key={challenge._id} challenge={challenge} handleComplete={()=>handleComplete(challenge._id)}/>
          })}
        </section>
        {popUp=="Success" ? <PopUpNotification title={popUp} desc={popUpDesc} setClosePop={setPopUp} buttonText={"Ok"} buttonClassName={" text-green-600 "} /> : 
          popUp!=false && <PopUpNotification title={popUp} desc={popUpDesc} setClosePop={setPopUp} buttonText={"Dismiss"} buttonClassName={" text-[--error] "} />}
    </div>
  )
}

export default Challenges