//Para hacer que este componente sea reutilizable se puede pasar parametros los cuales son los Props en donde lo recibimos por parametros
//Como convencion los parametros se llaman props
function Cabecera(props) {
    return (
        <header className="alert alert-info text-center">
        <h1>{props.titulo}</h1>
        <h2>{props.subtitulo}</h2>
        </header>
    )
}
//Esto es de Node.js y exporta el componente para poder ser utilizado en otros lados en este caso en app.js
export default Cabecera;
