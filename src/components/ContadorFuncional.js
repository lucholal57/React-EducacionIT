import { useState } from "react";

function ContadorFuncional() {
  //Variable de estado solo para componentes de React
  //Cada ves que esa variable se actualiza el componente se vuelve a resfrescar
//Huck es un metodo especial. Devuelve un contador que seria la variable, que se llama de estado y setContador es el que setea y permite refrescar el componente ContadorFuncional
//Todos los metodos que arranquen con un use es un Huck

    const [contador,setContador] = useState(0);

//useState devuelve 2 valores como un array, en este caso la primer posicion 0 devuelve la variable y la posicion 1 contiene el metodo setContador para setear la variable.

  return (
    <div className="text-center border p-3 shadow m-2">
      <h3> Contador {contador}</h3>
      <div>
        <button className="btn btn-success me-2" onClick={()=>
        setContador(contador-1)}>-</button>
        <button className="btn btn-danger" onClick={reset} >Reset</button>
        <button className="btn btn-warning ms-2" onClick={()=>
            setContador(contador+1)}>+</button>
      </div>
    </div>
  );

  function reset(){
    setContador(0);
}


}

export default ContadorFuncional;
