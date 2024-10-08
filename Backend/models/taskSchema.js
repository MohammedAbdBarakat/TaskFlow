const mongoose = require('mongoose')

const Schema = mongoose.Schema

const taskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    importance: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now
    },
    startDateTime: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: false
    },
    actualStartDate: {
        type: Date,
        required: false
    },
    actualEndDate: {
        type: Date,
        required: false
    },
    isDone: {
        type:Boolean,
        required: false
    },
    user_id: {
        type: String,
        required: true
    }
    
},{ timestamps: true})

module.exports = mongoose.model('Task',taskSchema)