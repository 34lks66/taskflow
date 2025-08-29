import { useState } from "react";

export default function Form( ) {
  const [name, setName] = useState('');
  const [state, setState] = useState('');
  const [dateS, setDateS] = useState('');
  const [dateE, setDateE] = useState('');
  const [priority, setPriority] = useState('');
  const [description, setDescription] = useState('');

  const onSubmit = (e) => {
    e.preventDefault(); 
    alert(`Submitted ${name} ${state} ${dateS} ${dateE} ${priority} ${description}`);
  };

  return (
    <form>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <select value={state} onChange={(e) => setState(e.target.value)}>
            <option>A Faire</option>
            <option>En Cours</option>
            <option>Fini</option>
        </select>
        <input type="date" value={dateS} onChange={(e) => setDateS(e.target.value)}/>
        <input type="date" value={dateE} onChange={(e) => setDateE(e.target.value)}/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>Basse</option>
            <option>Moyenne</option>
            <option>Haute</option>
        </select>
        <input value={description} onChange={(e) => setDescription(e.target.value)} />


      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}