# Curso React Native

## Iniciar proyecto

```bash
# React Native
npx react-native init ProjectName --version 0.68.2
npx react-native init AwesomeProject

# React
npx create-react-app mi-primera-app
cd mi-primera-app
yarn start
```

**COMPONENTES EMPIEZAN CON MAYUSCULAS**

Fragment, si no quieres encapsular todo en divs puedes hacerlo en fragments :

```java
  return (
        <> //esto es un fragment

            <h1>Hola Mundo</h1>
            <h1>Hola Dami</h1>

        </>//esto es un final de  fragment
    )
```

### Component Template Usando Props

```java
import React from "react";

export default function Saludar(props){
    console.log(props)
    return (
        <div>
            <h1>Saludar: { props.userInfo.name } tiene  { props.userInfo.edad } años </h1>
        </div>
    )
}
```

### Usando el componente anterior desde App

```java
import './App.css';
import Saludar from  './components/Saludar';

function App() {
  const user = {
    name: "Daniel",
    edad: 23,
    color:"azul",
  }

  return (
    <div className="App">
      <header className="App-header">
        <Saludar userInfo= {user}/>
      </header>
    </div>
  );
}
export default App;
```

Al hacer onClick en un button y pasarle por props una function y a esta le pasamos atributos
es necesario hacer una funcion anonima de tipo flecha para indicar que se espera a que le 
hagan click al button si no se ejecuta... Tiene sentido

```js
import React from "react";

export default function Saludar(props){

    console.log(props)
    console.log(props)
    return (
        <div>
            <h1>Saludar: { props.userInfo.name } tiene  { props.userInfo.edad } años </h1>
            <button onClick={() => props.saludar(props.userInfo.name)}></button>
        </div>
    )
}

```
Destructing para ser mas claro el codigo

```JavaScript
import React from "react";

export default function Saludar(props){

    const {userInfo,saludar} = props;
    //Anon por defecto si no recibimos prop 
    const {name = "Anon",edad} = userInfo;

    console.log(props)
    console.log(userInfo)
    console.log(saludar)
    return (
        <div>
            <h1>Saludar: { name } tiene  { edad } años </h1>
            <button onClick={() => saludar(name)}></button>
        </div>
    )
}
```

Template String

```java
`Hola ${nombre} tiene ${edad} años`
```

const [stateCar,setStateCar] = useState(false)

const encenderApagar = () => {
setStateCar(!stateCar)
}

Hook de estado useState

```javascript

// Creas Hook stateCar = Variable y setStateCar funcion para cambio de estado de la variable
  const [stateCar, setStateCar] = useState(false)
// Esta función es la llamada al presionar el button 
  const encenderApagar = () => {
    // en caso de no tener acceso a la variable se usa prevValue para obtener el estado actual de la variable
    setStateCar(prevValue => !prevValue)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>El coche esta:  {stateCar ? "Encendido" : "Apagado"} </h3>
        <button onClick={encenderApagar}>Encender/ Apagar </button>
      </header>
    </div>
  );
  
```
  
```java
```
  
```java
```
