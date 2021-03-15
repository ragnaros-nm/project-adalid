import React, { Fragment, useState, useEffect } from 'react';
import { DarkmodeSwitch } from 'reacthalfmoon';
import styled from '@emotion/styled';

import Buscador from './components/Buscador';
import Error from './components/Error';
import Tabs from './components/Tabs';
import Perfil from './components/Perfil';

const Mensaje = styled.div`
  margin: 300px auto;
  width:700px;
 
`;

function App() {
  
  const [darkmode, setDarkmode] = useState(false);
  const [error, setError] = useState(false);
  const [oauthResponse, setOauthResponse] = useState({});
  const [invokeOauth, setInvokeOauth]= useState(false);
  const [invokeAPI, setInvokeAPI]= useState(false);
  const [statusCodeOauth, setStatusCodeOauth] = useState(0);

  const [search, setSearch] = useState({
    character_region: '',
    character_realm: '',
    character_name: '',
  });

  let componente;
  useEffect(() => {
    const consultarAPI = async () => {
      //Obtener Token Oauth
      if (invokeOauth) {
        const OAUTH_URL = 'https://us.battle.net/oauth/token';
        const OAUTH_TOKEN = process.env.REACT_APP_OAUTH_TOKEN;
        console.log(OAUTH_TOKEN);
        const oauthAPI = await fetch(OAUTH_URL, {
          method: 'POST',
          mode: 'cors', 
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${OAUTH_TOKEN}`,
          },
          body: 'grant_type=client_credentials',
        });
        const status = await oauthAPI.status;
        
        const oauthResponse = await oauthAPI.json();
        if(status === 200){
          setStatusCodeOauth(status);
          console.log('respuesta correcta: ' + statusCodeOauth);
          setOauthResponse(oauthResponse);        
          setInvokeOauth(false);
          setInvokeAPI(true);
        }
        
      }
    };
    consultarAPI();
  }, [invokeOauth]);

  if (error) {
    componente = <Error mensaje='No hay resultados' />;
  } else{
    componente= null
  }
  return (
    <Fragment>
      <Buscador
        search={search}
        setSearch={setSearch}
        error={error}
        setError={setError}
        setOauthResponse={setOauthResponse}
        setInvokeOauth={setInvokeOauth}
      />
      
      {componente}

      {
        statusCodeOauth === 200 ? 
        <Perfil search={search} oauthResponse={oauthResponse} invokeAPI={invokeAPI} setInvokeAPI={setInvokeAPI}/> :null
      }
      { 
         statusCodeOauth === 200 ? <Tabs/> : 
          <Mensaje>
            <h2>Nada que mostrar todavia ;( </h2>
            Ingresa informacion arriba para poder buscar.
          </Mensaje>
      }
    
    </Fragment>
  );
}

export default App;
