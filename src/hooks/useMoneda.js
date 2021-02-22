 import styled from '@emotion/styled';
import React, { useState } from 'react';

 const useMoneda = (label,stateInicial,opciones)=>{

    //useState de nuestro custom hook
    const [state,actualizaState]=useState(stateInicial);

    const Seleccionar =()=>(
        <>
            <Label>{label}</Label>
            <Select
                onChange={e=>actualizaState(e.target.value)}
                value={state}
            >
                 <option value="">-Seleccione-</option>
                {opciones.map(elemento =>(
                    <option key={elemento.codigo} value={elemento.codigo}>{elemento.nombre}</option>
                ))}

            </Select>
        </>
    );

    //Retorna el state, interfaz y la funcion que modifica el state
    return [state,Seleccionar,actualizaState];

 }

 export default useMoneda; 


 //Styled

 const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
 `;

 const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block; 
 `;