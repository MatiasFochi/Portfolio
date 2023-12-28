

function BotonHipervinculo (props){
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

  return(
    <button onClick={manejarClic}>{props.nombre}</button>
  );
}

export default BotonHipervinculo;