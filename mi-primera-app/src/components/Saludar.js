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
