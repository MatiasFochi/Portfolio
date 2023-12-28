import Boton from './Componentes/BotonHipervinculo.js';
import Cabecera from './Componentes/Cabecera.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Cabecera className='Cabecera'/>
      <div>
        <Boton 
          vinculo= 'https://startling-marzipan-de3cc9.netlify.app' 
          nombre= 'Calculadora React'/>
      </div>
    </div>
  );
}

export default App;
