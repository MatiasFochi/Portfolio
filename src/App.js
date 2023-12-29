import AppContenedor from './Componentes/app-contenedor.js';
import Cabecera from './Componentes/Cabecera.js';
import './App.css';
import Formulario from './Componentes/Formulario.js';

function App() {
  return (
    <div className="App">
      <Cabecera />
      <div className='contenedor-aplicaciones'>
        <AppContenedor
          vinculo= 'https://startling-marzipan-de3cc9.netlify.app' 
          nombre= 'Calculadora' 
        />
        <AppContenedor 
          vinculo='https://soft-liger-d3063a.netlify.app'
          nombre='Administrador de Tareas'
        />
        <AppContenedor 
          vinculo= 'https://frabjous-taffy-5e61b4.netlify.app' 
          nombre= 'Testimonios' 
        />
        <AppContenedor 
          vinculo='https://cerulean-tartufo-5802ec.netlify.app'
          nombre='Contador de clicks'
        />
      </div>
      <Formulario />
    </div>
  );
}

export default App;
