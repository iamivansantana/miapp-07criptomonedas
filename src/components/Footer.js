import styled from '@emotion/styled'
import React from 'react'

const Footer = ({fecha}) => {
    return (
        <>
          <Foot>
            <p>Una producción de Ivan Santana &copy; {fecha} </p>    
          </Foot>  
        </>
    )
}


export default Footer

//styled
const Foot = styled.footer`
  background-color: white;
  text-align: center;
  max-width: 100%;
  margin-top: 2rem;
  font-family: Arial, Helvetica, sans-serif;
`;
