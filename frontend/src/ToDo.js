import "./ToDo.css";
import Hero from "./components/Hero";
import Task from "./components/Task";

export default function ToDo() {
  return (
    <div>
      <Hero />
      <Task />

      <section id="lasection">
        <div className="parent">
          <div className="div1">
            <div className="column-header">À faire</div>
            <div className="column-body"></div>
          </div>

          <div className="div2">
            <div className="column-header">En cours</div>
            <div className="column-body"></div>
          </div>

          <div className="div3">
            <div className="column-header">Terminé</div>
            <div className="column-body"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
