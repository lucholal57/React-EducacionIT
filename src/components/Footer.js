
//Tabien se puede referenciar lo que recibimos solo entre llaves y nos ahorramos escribir props, esto es de JavaScripts.
//Si es mas de una variable se pueden pasar separandolas por , "coma".
//En la parte del new Date al ser JavaScript se puede obtener el año de la forma comun de js.
function Footer({empresa,derechos}){
    return(
        <footer className="bg-dark text-light p-2 text-end fixed-bottom">
            <p> Copyright {empresa} {new Date().getFullYear()}. {derechos}</p>
        </footer>
    )
}

export default Footer;