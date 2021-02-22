import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useCriptomoneda from '../hooks/useCriptomoneda';
import useMoneda from '../hooks/useMoneda';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({guardarMoneda,guardarCriptoMoneda}) => {

    //useState del listado de Criptomonedas
    const[listacripto,guardarCriptomonedas]= useState([]);
    const [error,guardarError]=useState(false);

    const MONEDAS = [
        {codigo: 'USD',nombre:'Dolar de Estados Unidos'},
        {codigo: 'MXN',nombre:'Peso Mexicano'},
        {codigo: 'EUR',nombre:'Euro'},
        {codigo: 'GBP',nombre:'Libra Esterlina'}
    ]

    //utilizar Hook useMoneda
    const[moneda,SelectMoneda]=useMoneda('Elige tu Moneda','',MONEDAS);

    //utilizar hook useCriptomoneda
    const [criptomoneda,SelecCripto]=useCriptomoneda('Elige tu cripto Moneda','',listacripto);

    //Ejecutar llamado a la api con useEffect
    useEffect(() => {
        const consultarAPI = async()=>{
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD#';

            const resultado = await axios.get(url);

            guardarCriptomonedas(resultado.data.Data);
        }
        consultarAPI();
    }, []); 

    //Cuando el usuario hace submit
    const cotizarMoneda = e =>{
        e.preventDefault();

        //Validar si ambos Campos estan llenos
        if(moneda==='' || criptomoneda===''){
            guardarError(true);
            return;
        }
        //caso contrario Pasar los datos al componente principal
        guardarError(false);
        guardarMoneda(moneda);
        guardarCriptoMoneda(criptomoneda);



    }

    return (
        <>
            <form
                onSubmit={cotizarMoneda}
            >
                {error?<Error mensaje="Todos los Campos son Obligatorios"/>
                :null}
                <SelectMoneda />
                <SelecCripto />
                <Boton
                    type="submit"
                    value="calcular"
                />
            </form>  
        </>
    )
}

export default Formulario

//PropTypes
Formulario.propTypes={
    guardarMoneda: PropTypes.func.isRequired,
    guardarCriptoMoneda: PropTypes.func.isRequired
}

//Styled

const Boton  = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color:  #66A2FE;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;

    &:hover{
        background-color: #326AC0;
        cursor: pointer;
        
    }
`;
