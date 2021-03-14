import React, { Fragment, useState, useEffect } from "react";
import styled from "@emotion/styled";
import Error from "./Error";

const Contenedor = styled.div`
  width: 960px;
  margin: auto;
  // margin-top: -100px;
  display: flex;
`;

const Region = styled.div`
  width: 100px;
  //  float: left;
  //margin: 0px 20px 0 10px;
  margin: auto;
`;

const Reino = styled.div`
  width: 200px;
  //float: left;
  //margin: 0px 20px 0 10px;
  margin: auto;
`;
const Personaje = styled.div`
  width: 200px;
  //float: left;
  //margin: 0px 20px 0 10px;
  margin: auto;
`;

const Boton = styled.div`
  //margin-top: 100px;
  //width: 100%;
 // padding-top: 36px;
 //margin: 0px 20px 0 10px;
 margin: auto;
`;

const Formulario= styled.form`

  margin: 50px auto 0 auto;
  padding-bottom: 10px;
  border-bottom-color: #3a90ff;
  border-bottom-style: groove;
  width: 960px;
`;

const Buscador = ({ search, setSearch, error, setError,setInvokeOauth ,setOauthResponse }) => {
  const obtenerDatos = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value.toLocaleLowerCase(),
    });
  };
  const { character_region, character_realm, character_name } = search;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      character_region.trim() === "" ||
      character_realm.trim() === "" ||
      character_name.trim() === ""
    ) {
      setError(true);
      return null;
    }
    setError(false);
    setInvokeOauth(true);       
  };

  return (
    <div>
      {error ? <Error mensaje="Los campos no pueden ir vacios." /> : null}
      <Formulario onSubmit={handleSubmit}>
      <Contenedor>
        <Region>
        
          <input
            type="text"
            name="character_region"
            className="form-control"
            placeholder="Region"
            value={character_region}
            onChange={obtenerDatos}
          />
        </Region>
        <Reino>
         
          <input
            type="text"
            name="character_realm"
            className="form-control"
            placeholder="Reino"
            value={character_realm}
            onChange={obtenerDatos}
          />
        </Reino>
        <Personaje>
         
          <input
            type="text"
            name="character_name"
            className="form-control"
            placeholder="Personaje"
            value={character_name}
            onChange={obtenerDatos}
          />
        </Personaje>
        <Boton>
          <input 
                    type="submit"
                    value= "Buscar"
                    className= "btn btn-primary"                
                ></input>
        </Boton>
        </Contenedor>
      </Formulario>
    </div>
  );
};

export default Buscador;
