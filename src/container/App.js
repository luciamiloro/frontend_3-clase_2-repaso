import '../styles/App.css';
import ClassComponent from "../components/ClassComponent"
import FunctionComponent from "../components/FunctionComponent"

function App() {
  return (
    <div className="App">
      <h3>Invitados:</h3>
      {/* si escribimos SOLO el nombre de la prop, significa que es true  */}
      <ClassComponent nombre="Nicolas" estaEnLista /> 
      <ClassComponent nombre="Ivan" estaEnLista={false} />
      <ClassComponent nombre="Carolina" estaEnLista />
      <h3>Tareas: </h3>
      <FunctionComponent nombre="Nicolas" tarea="papas fritas" />
      <FunctionComponent nombre="Ivan" tarea="pizzas" />
      <FunctionComponent nombre="Carolina" tarea="bebidas" />
    </div>
  );
}

export default App;
