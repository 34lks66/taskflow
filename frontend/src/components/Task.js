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

    const formatDate = (dateString) => {
      if(!dateString) return 'N/A';
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: 'short',
        year: 'numeric'
      });
    };

    return (
        <section id="task" className="py-12 bg-w">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tasks.map((task) => (
                <div
                key={task._id}
                id={task._id}
                task={task.task}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer"
                >
                {/* <div className="relative overflow-hidden rounded-lg shadow-lg group min-h-40 bg-gray-800"> */}
                <div className="p-5">
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white"> */}
                  
                  <div className="flex justify-between items-start mb-3">
                    {/* NOM */}
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{task.TaskName}</h3>
                    {/* STATUT */}
                    <span className="text-xs font-medium font-gray-500 bg-gray-100 px-2 py-1 rounded">{task.TaskState}</span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    {/* PRIORITY */}
                    <span className="mr-2">Priorité:</span>
                    <span>{task.TaskPriority}</span>
                    {/* <span className={`inline-block w-3 h-3 rounded-full mr-2 ${getPriority(task.TaskPriority)}`}></span> */}
                  </div>

                    {/* DESCRIPTION */}
                    {task.TaskDescription && (
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{task.TaskDescription}</p>
                    )}

                    {/* DATE */}
                    <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm p4">
                      <div className="space-y-2">
                        <div className="flex-items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Début: </span>
                          <span>{formatDate(task.TaskStartDate)}</span>
                        </div>
                        <div className="flex-items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Fin: </span>
                          <span>{formatDate(task.TaskEndDate)}</span>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
            ))}
          </div>
        </section>
    );
}