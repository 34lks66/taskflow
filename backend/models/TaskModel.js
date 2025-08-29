// import { Schema, model, models } from 'mongoose'
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
        enum: ["Basse", "Moyenne", "Haute"],
        default: "Basse",
    },
    TaskDescription: {
        type: String,
        required: true,
    }
})

// const Task = models.task || model('Task', taskSchema) // pour éviter que Mongoose redéclare le modèle plusieurs fois

// mongoose.exports = mongoose.model("Task", taskSchema);
module.exports = mongoose.models.task || mongoose.model("Task", taskSchema);

// export default Task;