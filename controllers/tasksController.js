const Task = require('../models/taskSchema')
const User = require("../models/userSchema");

const mongoose = require('mongoose')


const hasTasksThisWeek= async(req , res)=>{
    const user_id= req.user;
    
    if (!user_id)
        res.status(423).json("user_id is not found, Check Token!");

    const user=await User.findById(user_id).exec();

    if (!user)
        return res.status(400).json({'message':"This user doesn't exist"});


    const oneWeekAgo = new Date();
    console.log( "oneWeekAgo: ",oneWeekAgo);
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    console.log( "oneWeekAgo: ",oneWeekAgo);
    const tasksThisWeek = await Task.find({
        user_id,
        createdAt: { $gte: oneWeekAgo }
    });

    
     if (tasksThisWeek.length > 0)
        res.status(200).json({message:"This user has tasks for this week"});
    else 
        res.status(200).json({message:"This user has not tasks for this week"});

}


//get all tasks
const getTasks = async (req, res) => {
    const user_id = req.user;
    const task = await Task.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(task)
}

//get single task
const getTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "did not find the task"})
    }
    const task = await Task.findById(id)

    if (!task) {
        return res.status(404).json({error: "did not find the task"})
    }

    res.status(200).json(task);
}

//create task
const createTask = async (req, res) => {
    const { title, type, description,startDate, startTime, endTime, importance, complex } = req.body;

    // Auto-fill isDone, and date:
    const date = Date.now(); // Current date for task creation
    const isDone = false; // Initialize as false for a new task

    try {
        const user_id = req.user._id;
        const task = await Task.create({
            title,
            type,
            description,
            importance,
            complex,
            startDate,
            startTime,
            endTime,
            completeDate: null, // To be set when the task is completed
            completeTime: null, // To be set when the task is completed
            isDone, // Initially set to false
            user_id,
            date, // Task creation date
        });

        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//update task
const updateTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "did not find the task"})
    }

    const task = await Task.findByIdAndUpdate({_id: id}, {...req.body})

    if (!task) {
        return res.status(404).json({error: "did not find the task"})
    }

    res.status(200).json(task);
}

//delete task
const deleteTask = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "did not find the task"})
    }

    const task = await Task.findByIdAndDelete({_id: id})

    if (!task) {
        return res.status(404).json({error: "did not find the task"})
    }

    res.status(200).json(task);
}



module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    hasTasksThisWeek,
}