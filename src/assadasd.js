import React, { Fragment, useState , useEffect} from 'react';
import { DarkmodeSwitch } from 'reacthalfmoon';

import Buscador from './components/Buscador';
import Personaje from './components/Personaje';
import Error from './components/Error'

function App() {
  const [darkmode, setDarkmode] = useState(false);
  const [error, setError]= useState(false);
  const [invoke, setInvoke]= useState(false);
  const [oauthResponse, setOauthResponse]= useState({});

  const [search, setSearch] = useState({
    region: '',
    realm: '',
    characterName: '',
  });

  //const {region, realm, characterName}= search


  useEffect(()=>{
    const OAUTH_URL = "https://us.battle.net/oauth/token";

    //OAUTH PROFILE API DATA

    //const CHARACTER_URL = `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}/appearance?namespace=profile-${region}&locale=es_MX&access_token=`;

    const consultarAPI = async () => {
        //Obtener Token Oauth
        if(invoke){
          const oauthAPI = await fetch(OAUTH_URL, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, *cors, same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization:
                "Basic ZmQ5NWZkY2E5OTBjNGU5OWI0ZjM0N2JhNWM4MTUxNjg6VVk2dUdJaUhSQjZhSXlYSm9iVXNRUFpRZ3pKWDJ2aE8=",
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: "grant_type=client_credentials",
            });
            const oauthResponse = await oauthAPI.json();
            setOauthResponse(oauthResponse);
            setInvoke(false);
        }
        
      }

      consultarAPI();

  },[invoke])


  let componente;

    if(error){
      componente= <Error mensaje="No hay resultados"/>;
    }else{
      componente=null;
    }

  return (
    <Fragment>
      <DarkmodeSwitch
        checked={darkmode}
        toggle={() => {
          setDarkmode(!darkmode);
        }}
      />
      <Buscador search={search} setSearch={setSearch} error={error} setError={setError}
        setInvoke={setInvoke}      
      />
      
    </Fragment>
  );
}

export default App;
