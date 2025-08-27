import './ToDo.css';

export default function ToDo() {
  return (
    <div>
      <h1 className="title">Bienvenue dans le ToDo</h1>

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