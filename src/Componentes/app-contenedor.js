import '../HojasDeEstilo/app-contenedor.css';

function AppContenedor (props){
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

  return(
    <div className="hipervinculo-contenedor">
      <a><strong>{props.nombre}</strong></a>
      <img 
      src='' 
      className="aplicacion-logo"/> 
      <button 
      onClick={manejarClic}
      className="hipervinculo-boton">
        {props.nombre}
      </button>
    </div>
  );
}

export default AppContenedor;