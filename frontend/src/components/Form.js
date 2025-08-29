import { useState } from "react";

export default function Form( ) {
  const [name, setName] = useState('');

  const onSubmit = (e) => {
    e.preventDefault(); 
    alert(`Submitted ${name}`);
  };

  return (
    <form>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSubmit}>Submit</button>
    </form>
  );
}