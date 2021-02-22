import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

const Error = ({mensaje}) => {
    return (
        <>
            <MensajeError>{mensaje}</MensajeError>
        </>
    )
}

export default Error

//PropTypes
Error.propTypes={
    mensaje: PropTypes.string.isRequired
}

//Styled
const MensajeError = styled.p`
    background-color: #b7322c;
    padding-left: 1rem;
    color: #FFF;
    font-size: 30px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    font-family: 'Bebas Neue',cursive;


`;