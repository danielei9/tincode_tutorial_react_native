import logo from './logo.svg';
import './App.css';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';
import Saludar from './components/Saludar';

import React, { useState } from "react"

function App() {

  const username = "Daniel"
  const edad = 23

  const user = {
    edad: 23,
    color: "azul",
  }

  const saludar = (name) => {
    alert("Hola " + name)
  }

  const [stateCar, setStateCar] = useState(false)

  const encenderApagar = () => {
    //setStateCar(!stateCar)
    setStateCar(prevValue => !prevValue)

  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar userInfo={user} saludar={saludar} />
        <h3>El coche esta:  {stateCar ? "Encendido" : "Apagado"} </h3>
        <button onClick={encenderApagar}>Encender/ Apagar </button>
      </header>
    </div>
  );
}

export default App;
