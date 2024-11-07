const routineSchema = require('../models/routineSchema');
const Routine = require('../models/routineSchema')
const mongoose = require('mongoose')


//add routine
const addRoutine = async (req, res) => {
    const { day, startDate,endDate , title} = req.body 
    const user_id = req.user;
    if (!day || !endDate||!startDate ||!title )
        return res.status(401).json({"message":"Missing info set {day,newRoutine} in body"});
    
    let routineDay= await Routine.findOne({user_id ,day}).exec();
    if (!routineDay){
        try {
            routineDay=new Routine({day:day , user_id:user_id});
            routineDay.routines.push({title , startDate , endDate});
            const result=await routineDay.save();
                res.status(200).json({result , message:"routine Created"});
        } catch (error) {
            console.log("couldn't create Routine" , error);
            res.status(500).json({"message":"Couldn't create Routine"});
        }
    }else {
        try {
            routineDay.routines.push({title,startDate, endDate});
            const result=await routineDay.save();
            res.status(200).json({result , message:"routine Created"});
        } catch (error) {
            console.log("couldn't create Routine");
            res.status(500).json({"message":"Couldn't create Routine"});
        }
    }

}

//get all routines
const getRoutines = async (req, res) => {
    const user_id = req.user
    try {
        const routines = await Routine.find({ user_id }).sort({ createdAt: -1 });
        res.status(200).json( routines); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//get routines for specific day:
const getDayRoutines= async (req,res)=>{
    const user_id = req.user;
    const day= req.headers?.day;
    console.log(day);
    if (day===undefined || day==="" ||day===null || user_id==undefined || !user_id){
        return res.status(400).json({"error":"Missing header elements"});
    }

    try {
        const routines = await Routine.findOne({ user_id ,day:day}).sort({ createdAt: -1 });
        res.status(200).json(routines); 
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

//update routineItem
const updateRoutineItem=async (req,res)=>{
    const user_id= req.user;
    const { day,routineItemId}=req.body;
    const data= req.body;
    console.log(routineItemId , day);
    if (!user_id || !day){
        return res.status(400).json({"error":"Missing header elements"});
    }
    if (!data){
        return res.status(400).json({"error":"Missing paramID or Body elements"});
    }
    // if (!mongoose.Types.ObjectId.isValid(routineItemId)) {
    //     return res.status(400).json({error: 'Invalid IDs'});
    // }

    const routine= await Routine.findOne({user_id:user_id , day}).exec();
    if (!routine)
        return res.status(401).json({"message":"Owner for this routine doesn't exist"});
    
    routine.routines=routine.routines.map((routineElement)=>{
        if (routineElement._id == routineItemId){
            routineElement.title=data.title || routineElement.title;
            routineElement.startDate=data.startDate || routineElement.startDate;
            routineElement.endDate=data.endDate ||routineElement.endDate
        }
        return routineElement;
    })

    const result= await routine.save();
    res.status(200).json(result);
}
const deleteRoutineItem= async(req,res)=>{
    const user_id= req.user;
    const { day,routineItemId}=req.body;
    console.log(day , routineItemId);
    if (!user_id || !day){
        return res.status(400).json({"error":"Missing header elements"});
    }

    if (!mongoose.Types.ObjectId.isValid(routineItemId)) {
        return res.status(400).json({error: 'Invalid IDs'});
    }

    const routine= await Routine.findOne({user_id:user_id , day}).exec();
    if (!routine)
        return res.status(401).json({"message":"Owner for this routine doesn't exist"});
    
    routine.routines=routine.routines.filter(RItem=>RItem._id!=routineItemId);
    const result= await routine.save();
    res.status(200).json(result);
}


module.exports = {addRoutine, getRoutines ,getDayRoutines ,deleteRoutineItem , updateRoutineItem};