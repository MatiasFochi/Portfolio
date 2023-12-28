import FotoPerfil from './FotoPerfil.jpeg';

function Cabecera(props) {
  return(
    <div>
      <h1>Bienvenidos a mi Portfolio</h1>
      <p>By Matias Fochi</p>
      <img 
      src = {FotoPerfil}/>
    </div>
  );
}

export default Cabecera;