import { useState } from 'react';
import '../HojasDeEstilo/Formulario.css';

function Formulario (props){

  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("mensaje enviado")
  };

  return(
    <div className='formulario-contenedor'>
      <h1 className='titulo'>Contacto</h1>
      <form
      className="formulario"
      onSubmit={manejarEnvio}>
        <input 
        className='mail-input'
        type='text'
        placeholder='Ingrese su correo electronico'
        name='texto'/>
        <input 
        className='empresa-input'
        type='text'
        placeholder='Ingrese la empresa que representa'
        name='texto'/>
        <input 
        className='mensaje-input'
        type='text'
        placeholder='Escriba su mensaje'
        name='texto'/>
        <button className="btn btn-success submit"  >Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;