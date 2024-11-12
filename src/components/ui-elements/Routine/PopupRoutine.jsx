import React from 'react'
import PopUpNotification from '../PopUpNotification'
const PopupRoutine = ({popUp,setClosePopup}) => {

/* 
 1: Success
 0: No taskId
-1: Missing Data
-2: Invalid Time
-3: Conflict
-4: Fetching Error

*/





  return <>    
    {popUp===1 ? <PopUpNotification title={"Success"} desc={"Proccess completed Successfully"} buttonText={"OK"} buttonClassName={"text-green-400"} setClosePop={setClosePopup} /> : 
    popUp===0 ? <PopUpNotification title={"Check Required"} desc={"Proccess completed but need check"} buttonText={"Continue"} buttonClassName={"text-[--text2]"} setClosePop={setClosePopup}  /> : 
    popUp===-1 ? <PopUpNotification title={"Missing info"} desc={"Make sure you have inserted all required data"} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setClosePopup}/> : 
    popUp===-2 ? <PopUpNotification title={"Invalid Time"} desc={"The time you inserted is invalid (start>end)"} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setClosePopup}/> : 
    popUp===-3 ? <PopUpNotification title={"Time Conlict"} desc={"This routine time conflicts with other routines"} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setClosePopup}/> : 
    popUp===-4 && <PopUpNotification title={"Network error"} desc={"Make sure you have good connection"} buttonText={"Dismiss"} buttonClassName={"text-[--error]"} setClosePop={setClosePopup}/>
    }
    </>

}

export default PopupRoutine