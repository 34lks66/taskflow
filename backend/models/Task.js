import { Schema, model, models } from 'mongoose'
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    TaskName: {
        type: String, 
        required: true,
        trim: true,
    },
    TaskState: {
        type: String,
        enum: ["A Faire", "En Cours", "Fini"],
        default: "A Faire",
    },
    TaskStartDate: {
        type: Date,
        required: true,
    },
    TaskEndDate: {
        type: Date,
        required: true,
    },
    TaskPriority: {
        type: String,
        required: true,
    },
    TaskDescription: {
        type: String,
        required: true,
    }
})

const Task = models.task || model('Task', taskSchema) // pour éviter que Mongoose redéclare le modèle plusieurs fois

export default Task;