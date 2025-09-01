import './ToDo.css';
import Hero from './components/Hero';
import Task from './components/Task';
import Form from './components/Form';

const handleButtonClick = () => {
  const Element = document.querySelector('#lasection')
  if(Element){
    Element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ToDo() {
  return (
    <div>
      <Hero />
      <Task />
      <Form />

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
