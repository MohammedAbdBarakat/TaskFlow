const User=require("../models/userSchema");
const luxon =require("luxon");

const checkTech= async(req,res,next)=>{
    const userId= req.user;
    
    const user=await User.findById(userId);
    if (!user){
        return res.status(400).json({"message":"User not found"});
    }
    const ThisWeekNumber= luxon.DateTime.now().weekNumber;
    if (ThisWeekNumber-user.currentWeek==0){
        next();
    }else{ 
        return res.status(409).json({"Tech":"Must be Choosed"});
    }

}
module.exports=checkTech;