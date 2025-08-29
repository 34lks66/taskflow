import React, { useState, useEffect } from "react";

// const tasks = [
//     {
//       id: 1,
//       title: 'task 1',
//       startDate: '01/09/2025', 
//       endDate: '02/09/2025',
//       description: 'rentrée',
//       statut: 'enCours',
//     },
//     {
//       id: 2,
//       title: 'task 2',
//       startDate: '10/09/2025', 
//       endDate: '15/09/2025',
//       description: 'lol',
//       statut: 'A Faire',
//     },
//     {
//       id: 3,
//       title: 'task 3',
//       startDate: '20/09/2025', 
//       endDate: '30/09/2025',
//       description: '.exe',
//       statut: 'Fini',
//     },
// ]

export default function Task( {setSelectedTask}) {
  
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/get')
      .then((res) => res.json())
      .then((data) => setTasks(data))
      .catch((err) => console.log(err));
    }, [])
    return (
        <section id="task" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tasks.map((task) => (
                <div
                key={task._id}
                id={task._id}
                task={task.task}
                className="cursor-pointer transition-all duration-300 hover:scale-105"
                >
                <div className="relative overflow-hidden rounded-lg shadow-lg group min-h-40 bg-gray-800">
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <h4 className="font-semibold text-sm">{task.TaskName}</h4>
                    <p>{task.TaskState}</p>
                    <p>{task.TaskPriority}</p>
                    <p className="text-xs opacity-90">{task.TaskStartDate} • {task.TaskEndDate}</p>
                    </div>
                </div>
            </div>
            ))}
            </div>
        </div>
        </section>
    );
}