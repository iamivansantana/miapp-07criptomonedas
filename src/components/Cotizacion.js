import styled from '@emotion/styled';
import React from 'react'
import PropTypes from 'prop-types';

const Cotizacion = ({resultado}) => {
    //Si el objeto esta vacio no ejecuta nada
    if(Object.keys(resultado).length===0)return null;
    
    console.log(resultado);
    //desestructurar resultado
    const{PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,LASTUPDATE}=resultado;

    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{PRICE}</span></Precio>
            <Info>Precio más alto del día : <span>{HIGHDAY}</span></Info>
            <Info>Precio más Bajo del día :  <span>{LOWDAY}</span></Info>
            <Info>Variación últimas 24 horas : <span>{CHANGEPCT24HOUR}</span></Info>
            <Info>Última Actualización : <span>{LASTUPDATE}</span></Info>
        </ResultadoDiv>
    )
}

export default Cotizacion

//PropTypes
Cotizacion.propTypes={
    resultado: PropTypes.object.isRequired
}


//Styled
const ResultadoDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;

    span{
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;

    span{
        font-weight: bold;
    }
`;