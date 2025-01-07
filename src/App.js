import './App.css';
import Boton from './componentes/boton';
import Pantalla from './componentes/pantalla';
import BotonClear from './componentes/botonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    const operadores = ['+', '-', '*', '÷'];
    const ultimoCaracter = input.slice(-1);

    // Validación: No más de 1 operador consecutivo
    if (operadores.includes(val) && operadores.includes(ultimoCaracter)) {
      return;
    }

    // Evaluación directa si hay más de 2 operadores consecutivos
    if (input.length >= 2 && operadores.includes(val) && operadores.includes(input.slice(-1)) && operadores.includes(input.slice(-2, -1))) {
      calcularResultado();
      setInput((evaluate(input.replace('÷', '/'))).toString() + val);
    } else {
      setInput(input + val);
    }
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input.replace('÷', '/')).toString());
    }
  };
  
  return (
    <div className='App'>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput} >9</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>÷</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput ('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
