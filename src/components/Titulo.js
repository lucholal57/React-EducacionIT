//Este ejemplo va a ser un componente de clase. si bien hoy en dia se puede usar ambos.
//Se importa React por que es el export default y el component es un export comun por eso lo recibimos entre corchetes
import {Component} from "react"; 

//Ek metodo render deberia contener lo mismo que tienen los componentes funcionales en el return. render es un metodo
class Titulo extends Component{
    render(){
        return(
            <h3 className="text-primary">Este es un titulo de Componente de Clase</h3>
        )
    }
} 

export default Titulo;
