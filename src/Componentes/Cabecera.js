import FotoPerfil from './FotoPerfil.jpeg';
import '../HojasDeEstilo/Cabecera.css';

function Cabecera(props) {
  return(
    <div className='cabecera-contenedor'>
      <div>
        <h1 className='nombre' >Matias Fochi</h1>
        <p className='subtitulo'>Desarrollador Front-End</p> 
      </div> 
      <div>
      <img
      className='foto-perfil' 
      src = {FotoPerfil} 
      alt = 'Foto de perfil'/>
      </div>
    </div>
  );
}

export default Cabecera;