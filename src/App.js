import styled from '@emotion/styled';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cotizacion from './components/Cotizacion';
import Footer from './components/Footer';
import Formulario from './components/Formulario';
import Spinner from './components/Spinner';
import imagen from './cryptomonedas.png';




function App() {

  const[moneda,guardarMoneda]=useState('');
  const[criptoMoneda,guardarCriptoMoneda]=useState('');
  const[resultado,guardaResultado]=useState({});
  const[cargando,guardarCargando]=useState(false);

  useEffect(() => {
    
    const cotizarCriptomoneda = async()=>{
       //Evitar que cargue la primera ves que carga la pagina
        if(moneda==='')return;
        
        //consultar la api para cotizacion
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptoMoneda}&tsyms=${moneda}`;

        const resultado = await axios.get(url);

        //Mostrar el spinner
        guardarCargando(true);

        //ocultar el spiner despues de N segundos
        setTimeout(() => {
          //Cambiar el estado de cargando
          guardarCargando(false);
          
          //Guarda cotizacion
          guardaResultado(resultado.data.DISPLAY[criptoMoneda][moneda]);
        }, 2000);

        }
        cotizarCriptomoneda();

  }, [moneda,criptoMoneda]);

  // mostrar spinner o resultado
  const componente = (cargando)? <Spinner /> : <Cotizacion resultado={resultado}/>

   //Obtener Fecha para el Footer
   const fecha = new Date().getFullYear();
  return (
    <>
    <Contenedor>
      <div>
        <Imagen 
          src={imagen}
          alt="imagen cripto"
        />
      </div>
      <div>
        <Heading>Cotiza Criptomonedas</Heading>

        <Formulario 
          guardarMoneda={guardarMoneda}
          guardarCriptoMoneda={guardarCriptoMoneda}
        />
        {componente}
      </div>
    </Contenedor>
    <Footer fecha={fecha}/>
    </>
  );
}

export default App;

//Styled

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0auto;
  @media (min-width:992px){
    display: grid;
    grid-template-columns:repeat(2,  1fr);
    column-gap: 2rem;
  }
`;

