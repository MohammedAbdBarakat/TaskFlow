const User = require("../models/userSchema");
const Task = require("../models/taskSchema");
const mongoose = require('mongoose')




// 1- Helper function to check if user has any tasks this week
async function hasTasksThisWeek(userId) {
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    // console.log( "oneWeekAgo: ",oneWeekAgo);
    const tasksThisWeek = await Task.find({
        user_id: userId,
        createdAt: { $gte: oneWeekAgo }
    });

    return tasksThisWeek.length > 0;
}


const getTechnique=async(req,res)=>{
    const user_id=req.user;
    const user=await User.findById(user_id).exec();
    if (!user)
        return res.status(404).json({ error: "User ID is invalud, Check Token" });
    else 
        return res.status(200).json({currentTechnique:user.currentTechnique||"None" });

}
const updateTechnique=async(req,res)=>{
    const user_id = req.user;
    const { technique } = req.body;

    if (!mongoose.Types.ObjectId.isValid(user_id)) {
        return res.status(404).json({ error: "User ID is invalud, Check Token" });
    }

    try {
        const user = await User.findById(user_id);
        if (user.currentWeek ==luxon.DateTime.now().weekNumber){
            return res.status(409).json({message:"Cannot change technique before the week ends"})
        }
        
        // const hasTasks = await hasTasksThisWeek(user_id);
        // if (hasTasks) {
            //     return res.status(400).json({ error: "Cannot change technique before the week ends" });
            // }
        // console.log(hasTasks);

        user.currentTechnique = technique;
        user.currentWeek=luxon.DateTime.now().weekNumber;
        await user.save();

        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}


module.exports = {getTechnique , updateTechnique};