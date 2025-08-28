import check from "../list_check_3_line.svg";

export default function Hero( ) {
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
                <h1 className="text-4xl font-bold text-white">Bienvenue dans le ToDo</h1>
            </div>
        </>
    );
}