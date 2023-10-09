import "bootstrap/dist/css/bootstrap.css";
import Cabecera from "./components/Cabecera";
import ContadorFuncional from "./components/ContadorFuncional";
import ContadorClase from "./components/ContadorClase";

function App() {
  return (
    <div>
      <Cabecera titulo="Bienvenido a la Clase 3" />
      <main className="container">
        <div className="row">
          <div className="col-md-6">
          <ContadorFuncional />
          </div>
          <div className="col-md-6">
          <ContadorClase />
          </div>
        </div>
        
      </main>
    </div>
  );
}

export default App;
