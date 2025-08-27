import './ToDo.css';
import Task from './components/Task';


export default function ToDo() {

  return (
    <div>
      
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <h1 className="text-4xl font-bold text-white">Bienvenue dans le ToDo</h1>
      </div>
      
      <Task />

      <div className="parent">
        <div className="div1">
          <div className="column-header">À faire</div>
          <div className="column-body">
          </div>
        </div>

        <div className="div2">
          <div className="column-header">En cours</div>
          <div className="column-body">
          </div>
        </div>

        <div className="div3">
          <div className="column-header">Terminé</div>
          <div className="column-body">
          </div>
        </div>
      </div>
    </div>
  );
}