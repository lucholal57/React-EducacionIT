//En este componente vamos a utilizar una funcion flecha y no una fuction convencional en js como function Lista(){}.
const Lista = ({ items }) => {
    return (
        <ul className="list-group">
        {items.map((item) => {
            return (
            <li key={item} className="list-group-item">
                {item}
            </li>
            );
        })}
        </ul>
    );
};
export default Lista;
