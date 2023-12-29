function AppContenedor (props){
  const url = props.vinculo;

  const manejarClic = () =>{
    window.open(url, '_blank')
  };

  return(
    <div>
      <a><strong>{props.nombre}</strong></a>
      <img src='' /> 
      <button onClick={manejarClic}>{props.nombre}</button>
    </div>
  );
}

export default AppContenedor;