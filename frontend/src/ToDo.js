import './ToDo.css';
import Hero from './components/Hero';
import Task from './components/Task';

const handleButtonClick = () => {
  const Element = document.querySelector('#lasection')
  if(Element){
    Element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function ToDo() {

  return (
    <div>
      <button
        type="button"
        onClick={handleButtonClick}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                   dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 
                   dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm 
                   px-5 py-2.5 text-center me-2 mb-2"
      >Scroll
      </button>


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
