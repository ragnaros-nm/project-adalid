import React, { Fragment, useState, useEffect } from "react";
import { DarkmodeSwitch } from "reacthalfmoon";

import Buscador from "./components/Buscador";
import Personaje from "./components/Personaje";
import Error from "./components/Error";
import Contendor from './components/Contenedor';

function App() {
  
  const [darkmode, setDarkmode] = useState(false);
  const [error, setError] = useState(false);
  const [oauthResponse, setOauthResponse] = useState({});
  const [invokeOauth, setInvokeOauth]= useState(false);
  const [invokeAPI, setInvokeAPI]= useState(false);
  const [statusCodeOauth, setStatusCodeOauth] = useState(0);

  const [search, setSearch] = useState({
    region: "",
    realm: "",
    characterName: "",
  });

  let componente;
  useEffect(() => {
    const consultarAPI = async () => {
      //Obtener Token Oauth
      if (invokeOauth) {
        const OAUTH_URL = "https://us.battle.net/oauth/token";
        const OAUTH_TOKEN = process.env.REACT_APP_OAUTH_TOKEN;
        console.log(OAUTH_TOKEN);
        const oauthAPI = await fetch(OAUTH_URL, {
          method: "POST",
          mode: "cors", 
          cache: "no-cache",
          credentials: "same-origin", 
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Authorization: `Basic ${OAUTH_TOKEN}`,
          },
          body: "grant_type=client_credentials",
        });
        const status = await oauthAPI.status;
        
        const oauthResponse = await oauthAPI.json();
        if(status === 200){
          setStatusCodeOauth(status);
          console.log("respuesta correcta: " + statusCodeOauth);
          setOauthResponse(oauthResponse);        
          setInvokeOauth(false);
          setInvokeAPI(true);
        }
        
      }
    };
    consultarAPI();
  }, [invokeOauth]);

  if (error) {
    componente = <Error mensaje="No hay resultados" />;
  } else{
    componente= null
  }
  const icono= "https://render-us.worldofwarcraft.com/icons/56/inv_sword_39.jpg"
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
      <Contendor/>
      {componente}
      {statusCodeOauth === 200 ? <Personaje search={search} oauthResponse={oauthResponse} invokeAPI={invokeAPI} setInvokeAPI={setInvokeAPI}/> :null
      }
    </Fragment>
  );
}

export default App;
