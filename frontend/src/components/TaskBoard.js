import React, { useState, useEffect } from "react";
import Task from './Task';

const handleButtonClick = () => {
  const Element = document.querySelector('#lasection')
  if(Element){
    Element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function TaskBoard() {
    const [tasks, setTasks] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/api/get')
        .then((res) => res.json())
        .then((data) => setTasks(data))
        .catch((err) => console.log(err));
    }, [])

    const tasksToDO = tasks.filter(task => task.TaskState === "A Faire")
    const tasksInProgress = tasks.filter(task => task.TaskState === "En Cours")
    const tasksDone = tasks.filter(task => task.TaskState === "Fini")
    return(
      <section id="lasection">
        <div className="parent">
          <div className="div1">
            <div className="column-header">À faire</div>
            <div className="column-body">{tasksToDO.map(task => <Task key={task._id} id={task._id} task={task}/>)}</div>
          </div>

          <div className="div2">
            <div className="column-header">En cours</div>
            <div className="column-body">{tasksInProgress.map(task => <Task key={task._id} id={task._id} task={task}/>)}</div>
          </div>

          <div className="div3">
            <div className="column-header">Terminé</div>
            <div className="column-body">{tasksDone.map(task => <Task key={task._id} id={task._id} task={task}/>)}</div>
          </div>
        </div>
      </section>
    )
}

