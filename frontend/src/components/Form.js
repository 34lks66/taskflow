import { useState } from "react";

export default function Form() {  
  const [TaskName, setName] = useState('');
  const [TaskState, setState] = useState('A Faire');
  const [TaskStartDate, setDateS] = useState('');
  const [TaskEndDate, setDateE] = useState('');
  const [TaskPriority, setPriority] = useState('Basse');
  const [TaskDescription, setDescription] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault(); 

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        TaskName: TaskName,
        TaskState: TaskState,
        TaskStartDate: TaskStartDate,
        TaskEndDate: TaskEndDate,
        TaskPriority: TaskPriority,
        TaskDescription: TaskDescription
      })
    };
    
    try {
      const response = await fetch('http://localhost:5000/api/post', requestOptions);
      const data = await response.json();
      setMessage(`Tâche créée avec succès! ID: ${data.id}`);
      
      // Réinitialiser le formulaire
      setName('');
      setState('A Faire');
      setDateS('');
      setDateE('');
      setPriority('Basse');
      setDescription('');
    } catch (error) {
      setMessage('Erreur lors de la création de la tâche');
      console.error('Erreur:', error);
    }
  };

  //
  //
  //FAIRE BOUTON AJOUTER
  //
  //

  return (
    <form>
        <input value={TaskName} onChange={(e) => setName(e.target.value)} />
        <select value={TaskState} onChange={(e) => setState(e.target.value)}>
            <option>A Faire</option>
            <option>En Cours</option>
            <option>Fini</option>
        </select>
        <input type="date" value={TaskStartDate} onChange={(e) => setDateS(e.target.value)}/>
        <input type="date" value={TaskEndDate} onChange={(e) => setDateE(e.target.value)}/>
        <select value={TaskPriority} onChange={(e) => setPriority(e.target.value)}>
            <option>Basse</option>
            <option>Moyenne</option>
            <option>Haute</option>
        </select>
        <input value={TaskDescription} onChange={(e) => setDescription(e.target.value)} />


      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}