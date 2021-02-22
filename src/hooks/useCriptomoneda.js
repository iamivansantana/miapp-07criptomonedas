import styled from '@emotion/styled';
import React, { useState } from 'react';

 const useCriptomoneda = (label,stateInicial,opciones)=>{

     

    //useState de nuestro custom hook
    const [state,actualizaState]=useState(stateInicial);

    const SelecCripto =()=>(
        <>
            <Label>{label}</Label>
            <Select
                onChange={e=>actualizaState(e.target.value)}
                value={state}
            >
                 <option value="">-Seleccione-</option>
                {opciones.map(opcion =>(
                    <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>{opcion.CoinInfo.FullName}</option>
                ))}
            </Select>
        </>
    );
    //Retorna el state, interfaz y la funcion que modifica el state
    return [state,SelecCripto,actualizaState];

 }

 export default useCriptomoneda; 


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