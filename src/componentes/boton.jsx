import React from 'react';
import '../hojas-de-estilo/Boton.css';

function Boton(props) {
  const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  if (esOperador(props.children)) {
    return (
      <button className='boton-contenedor operador'
        onClick={()=> props.manejarClic(props.children)}  >
        {props.children}
      </button>
    );
  }else{
    return (
      <button className='boton-contenedor'
        onClick={()=> props.manejarClic(props.children)}  >
        {props.children}
      </button>
    );
  }

  
}

export default Boton;
