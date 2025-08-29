const TaskModel = require("../models/TaskModel")

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks) 
}

module.exports.saveTask = (req, res) => {
    // const { tasks } = req.body
    const taskData = req.body

    TaskModel.create(taskData)
    .then((data) => {
        console.log("Saved successfully...");
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong !"});
    })
}

module.exports.updateTask = (req, res) => {
    const {id} = req.params
    // const { tasks } = req.body
    const taskData = req.body;

    TaskModel.findByIdAndUpdate(id, taskData)
    .then(() => res.send("Update successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong !"});
    })
}

module.exports.deleteTask = (req, res) => {
    const {id} = req.params

    TaskModel.findByIdAndDelete(id)
    .then(() => res.send("Delete successfully..."))
    .catch((err) => {
        console.log(err);
        res.send({error: err, msg: "Something went wrong !"});
    })
}