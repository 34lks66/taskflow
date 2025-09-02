import React, { useState, useEffect } from "react";
import edit from "../edit_line.svg";

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

export default function Task({ task }) {
    const [editingTask, setEditingTask] = useState(null);
    const [deleteTask, setDeleteTask] = useState(null);


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
            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> */}
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-5 cursor-pointer hover:shadow-md transition-all">
                {/* <div className="relative overflow-hidden rounded-lg shadow-lg group min-h-40 bg-gray-800"> */}
                  {/* <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white"> */}
                  <div className="flex justify-between items-start mb-3">
                    {/* NOM */}
                    <h3 className="text-lg font-semibold text-gray-800 truncate">{task.TaskName}</h3>
                    {/* STATUT */}
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">{task.TaskState}</span>
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
                    <div className="border-t border-gray-200 bg-white/80 backdrop-blur-sm p-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Début: </span>
                          <span>{formatDate(task.TaskStartDate)}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="font-medium">Fin: </span>
                          <span>{formatDate(task.TaskEndDate)}</span>
                        </div>
                      </div>
                    </div>

                    {/* SUPPRESSION */}
                    <button
                    onClick={() => setDeleteTask(task)}
                    className="mt-2 flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition"
                  >
                    <img src={edit} alt="Edit" className="w-4 h-4 mr-2" />{" "}
                    Supprimer
                  </button>

                    {/* EDITION */}
                    <button
                    onClick={() => setEditingTask(task)}
                    className="mt-2 flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded hover:bg-blue-600 transition"
                  >
                    <img src={edit} alt="Edit" className="w-4 h-4 mr-2" />{" "}
                    Modifier
                  </button>
            </div>
          {/* </div> */}
          {/* si il ya une tache dans editingTask on affiche le form */}
          {editingTask && (
          <EditForm task={editingTask} onClose={() => setEditingTask(null)} />
          )}
        </section>
    );
}

function EditForm({ task, onClose }) {
  const [TaskName, setName] = useState(task.TaskName || "");
  const [TaskState, setState] = useState(task.TaskState || "A Faire");
  const [TaskStartDate, setDateS] = useState(task.TaskStartDate || "");
  const [TaskEndDate, setDateE] = useState(task.TaskEndDate || "");
  const [TaskPriority, setPriority] = useState(task.TaskPriority || "Basse");
  const [TaskDescription, setDescription] = useState(
    task.TaskDescription || ""
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        TaskName: TaskName,
        TaskState: TaskState,
        TaskStartDate: TaskStartDate,
        TaskEndDate: TaskEndDate,
        TaskPriority: TaskPriority,
        TaskDescription: TaskDescription,
      }),
    };

    fetch(`http://localhost:5000/api/update/${task._id}`, requestOptions)
      .then((response) => response.status)
      .then((data) => {
        console.log("Tache mis a jour:", data);
        onClose();
      })
      .catch((err) => console.error("erreur lors de la maj:", err));
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={TaskName}
        onChange={(e) => setName(e.target.value)}
        placeholder="Task Name"
      />
      <select value={TaskState} onChange={(e) => setState(e.target.value)}>
        <option>A Faire</option>
        <option>En Cours</option>
        <option>Fini</option>
      </select>
      <input
        type="date"
        value={TaskStartDate}
        onChange={(e) => setDateS(e.target.value)}
      />
      <input
        type="date"
        value={TaskEndDate}
        onChange={(e) => setDateE(e.target.value)}
      />
      <select
        value={TaskPriority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Basse</option>
        <option>Moyenne</option>
        <option>Haute</option>
      </select>
      <textarea
        value={TaskDescription}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
      />

      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 transition"
      >
        Modifier
      </button>

      <button
        type="button"
        onClick={onClose}
        className="px-4 py-2 bg-gray-300 text-gray-800 font-medium rounded hover:bg-gray-400 transition"
      >
        Annuler
      </button>
    </form>
  );

  function DeleteTask({ task }) {
  }

}