//Importamos Bootstrap
import "bootstrap/dist/css/bootstrap.css";
//Importamos componente Cabecera y Footer
import Cabecera from "./components/Cabecera";
import Footer from "./components/Footer";
import Lista from "./components/Lista";
import Titulo from "./components/Titulo";
//Esto es un componente de funcional. Lo podemos notar por el nombre function App()
function App() {
  //Los parametros (titulo y subtitulo) son los que van a caer al props del componente cabecera.
  //En el caso del Footer hacemos los mismo y mandamos 2 variables las cuales van a llegar al componente footer y van a ser remplazados
  return (
    <>
      <Cabecera titulo="Bienvenido al Curso de React" subtitulo="Clase 2" />
      <main className="container">
        <Titulo />
        <Lista
          items={[
            "Dinamico",
            "Facil",
            "Amigable",
            "Requiere Practiva",
            "Es Divertido",
          ]}
        />
      </main>
      <Footer
        empresa=" Educacion IT"
        derechos="Todos los derechos reservados"
      />
    </>
  );
}

export default App;
