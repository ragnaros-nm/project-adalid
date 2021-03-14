import React from 'react';
import './Contenedor.css';
import imagen from '../assets/orc-white.png';
import styled from '@emotion/styled';
import Loading from './Loading';

const Imagen= styled.img`
    width: 30px;
    height:30px;
    margin-right: 5px;
    margin-bottom: -5px;
`;

const Contenedor = styled.div`
    width: 960px;
    margin: auto;
`;

const Tabs = () => {

    setTimeout(()=>{
        console.log('En contruccion');
      }, 3000)

    return ( 
        <Contenedor>
            <h2>Sección en contrucción ;(</h2>
        </Contenedor> 
        
    );
}
 
export default Tabs;