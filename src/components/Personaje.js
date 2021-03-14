import React, { Fragment, useState,useEffect } from "react";
import Perfil from './Perfil';

const Personaje = ({ search, oauthResponse, invokeAPI, setInvokeAPI }) => {
    
    const [apiResponse, setApiResponse]= useState(false);
    const [appearance, setAppearance]= useState({});
    const {access_token, token_type, expires_in}= oauthResponse; 
    const {region, realm, characterName} = search;

    useEffect(() => {
        const CHARACTER_URL = `https://us.api.blizzard.com/profile/wow/character/${realm}/${characterName}/appearance?namespace=profile-${region}&locale=es_MX&access_token=${access_token}`;
        const consultarAPI = async () => {
            if (invokeAPI) {
                const appearanceAPI = await fetch(CHARACTER_URL);
                const response = await appearanceAPI.json();
                setAppearance(response);
                setApiResponse(true);
                setInvokeAPI(false);
            }
        };

        consultarAPI();
    }, [invokeAPI]);

    return (
        <Fragment>
        <h1>Desde Personaje:</h1>        
            {apiResponse ? <Perfil  appearance={appearance} apiResponse={apiResponse}/> : null}
        </Fragment>
    );
};

export default Personaje;
