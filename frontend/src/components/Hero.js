import check from "../list_check_3_line.svg";

export default function Hero() {
  return (
    <>
      <header className="App-header">
        <img src={check} className="check-icon" alt="check" />
        <div className="texte-header">
          <h2 className="titleHeader">Gestionnaire de Tâches</h2>
          <p className="sbtitle">Organisez vos projets efficacement</p>
        </div>
      </header>
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            Bienvenue dans le ToDo
          </h1>
          <div className="mt-4">
            <Button />
          </div>
        </div>
      </div>
    </>
  );
}

const handleButtonClick = () => {
  const Element = document.querySelector("#lasection");
  if (Element) {
    Element.scrollIntoView({ behavior: "smooth" });
  }
};
function Button() {
  return (
    <button
      type="button"
      onClick={handleButtonClick}
      className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 
                       hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 
                       dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 
                       dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm 
                       px-5 py-2.5 text-center me-2 mb-2"
    >
      Scroll
    </button>
  );
}
