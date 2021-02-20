import React, { Fragment } from "react";

const Resumen = ({ appearance, apiResponse }) => {
  const {
    character,
    playable_race,
    playable_class,
    active_spec,
    gender,
    faction,
  } = appearance;

  return (
    <Fragment>
      <h1>Resumen</h1>
      <p>
        <label>Reino: </label>
        {character.realm.name}
      </p>
      <p>
        <label>Nombre:</label>
        {character.name}
      </p>
      <p>
        <label>Raza: </label>
        {playable_race.name}
      </p>
      <p>
        <label className="text-primary">Clase:</label>
        {playable_class.name}
      </p>

      <p>
        <label>Especializacion:</label>
        {active_spec.name}
      </p>

      <p>
        <label>Genero:</label>
        {gender.name}
      </p>
      <p>
        <label>Faccion:</label>
        {faction.name}
      </p>
    </Fragment>
  );
};

export default Resumen;
