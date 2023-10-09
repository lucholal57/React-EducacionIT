//Siempre un componente de class se herea de una clase base como en programacion orientada a objetos
//Los estados no se definen mediante "Hucks" en los componente de classe. Tienen metodos en particular por ejemplo el contrustor para incicializar

import { Component } from "react";

class ContadorClase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
    };
  }

  incrementar() {
    //Para modificar el estado tenemos el setState que extiende de la class component
    this.setState({contador : this.state.contador+1});
  }

  decrementar() {
    this.setState({contador : this.state.contador-1});
    
  }

  reset() {
    this.setState({contador : 0})
  }

  //Para poder asicicar los metodos con los obejos en los componentes de clases se usa "bind". Por ejemplo como lo usamos en los botones con el evento onclick para poder ejecutar la funcion y el this es el objeto en si.
  render() {
    return (
      <div className="text-center border p-3 shadow m-2">
        <h3>Contador de Clase {this.state.contador}</h3>
        <div>
            
          <button className="btn btn-success me-2" onClick={this.decrementar.bind(this)}>-</button>
          <button className="btn btn-danger" onClick={this.reset.bind(this)}>Reset</button>
          <button className="btn btn-warning ms-2" onClick={this.incrementar.bind(this)}>+</button>
        </div>
      </div>
    );
  }
}

export default ContadorClase;
