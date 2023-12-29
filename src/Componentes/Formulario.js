import { useState } from 'react';

function Formulario (props){

  const [input, setInput] = useState('');

  const manejarEnvio = e => {
    e.preventDefault();
    console.log("mensaje enviado")
  };

  return(
    <div className='formulario-contenedor'>
      <h1>Contacto</h1>
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
        <button className='Formulario-boton'>Enviar</button>
      </form>
    </div>
  );
}

export default Formulario;