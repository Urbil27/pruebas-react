import logo from './logo.svg';
import './App.css';

function App() {
  let nombre = prompt("Escribe tu nombre:")
  return (
      hola(nombre)

  );
}
function hola(nom){


  let contenido = <h1>Hola {nom}</h1>;
  return (contenido);
}
export default App;
