import React, { Fragment, useEffect, useState } from "react";
import styled from '@emotion/styled';
import LogoHorda from '../assets/horde-logo.png';
import LogoAlianza from '../assets/alliance-logo.png';
import Loading from './Loading';

const Imagen= styled.img`
    width: 60px;
    height:80px;
    margin-right: 5px;
    margin-bottom: -5px;
`;

const DivResumen= styled.div`
  width: 960px;
  margin: 30px auto;
  @font-face {
      font-family: 'FrizQuadrataTT';
      src: local('FrizQuadrataTT'), url("../assets/FrizQuadrataTT.ttf");
   };
  font-family: FrizQuadrataTT;
  display: flex;
`;

const Personaje= styled.div`
  
      
  `;

const Extras= styled.div`
  margin: auto;

`;

const Nombre= styled.label`
  font-size: 30px;
  margin-bottom: 0px;
  margin-right: 15px;
`;

const Titulo= styled.p`
margin-top: 0px;  

`;

const SUP= styled.p`
    margin: 0px;
    text-align: center;

`;

const INF= styled.p`
    margin: 0px;
    text-align: center;
    font-size: 22px;

`;

const Cargando= styled.div`
  width: 100px;
  margin:40px auto;
`;

const Perfil = ({ search, oauthResponse, invokeAPI, setInvokeAPI }) => {

  const [apiResponse, setApiResponse]= useState(false);
  const [resume, setResume]= useState({});
  const {access_token, token_type, expires_in}= oauthResponse; 
  const {character_region, character_realm, character_name} = search;
  const [statusCode, setStatusCode]= useState(0);
  const [isloading, setIsLoading]= useState(true);

  useEffect(() => {
    const CHARACTER_URL = `https://us.api.blizzard.com/profile/wow/character/${character_realm}/${character_name}?namespace=profile-${character_region}&locale=es_MX&access_token=${access_token}`;
    const consultarAPI = async () => {
        if (invokeAPI) {
            const appearanceAPI = await fetch(CHARACTER_URL);
            const status = await appearanceAPI.status;
            const response = await appearanceAPI.json();

            if(status === 200){

              setTimeout(()=>{
                setIsLoading(false);                  
                setStatusCode(status);       
                setApiResponse(true);
                setInvokeAPI(false);
              }, 3000)
              setResume(response);
              
              console.log("respuesta api",response);
            }else{
              return;
            }
        }
    };
      consultarAPI();
  }, [invokeAPI]);

  const {name,faction,race,character_class,active_spec,realm,guild,level,achievement_points,average_item_level,
    equipped_item_level,active_title, covenant_progress}= resume;

  return (    
    <Fragment>
    {
     
      isloading ?<Cargando><Loading/></Cargando>  :

      <DivResumen>
        <Imagen src={faction.name==='Horda' ? LogoHorda : LogoAlianza} alt="Logo"/>
        <Personaje>
          <Nombre>{name}</Nombre>
          <Titulo>{active_title.name}</Titulo>
        </Personaje>
        <Extras>
        <SUP>{realm.name}</SUP>
          <INF>{guild.name}</INF>
        </Extras>
        <Extras>
          <SUP>{race.name} {character_class.name} {active_spec.name} ({level})</SUP>
          <INF>{typeof convenant_progress != "undefinded" ? covenant_progress.chosen_covenant.name + " Reconocimiento " + covenant_progress.renown_level : "Sin covenant"}</INF>
        </Extras>
        <Extras>
        <SUP>Nivel de objeto {equipped_item_level} ({average_item_level})</SUP>
          <INF>Puntos de logros {achievement_points}</INF>
        </Extras>
      </DivResumen>
    }
     
    </Fragment>
  );
};

export default Perfil;
