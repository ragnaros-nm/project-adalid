


<Fragment>
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
          <INF>{typeof convenant_progress != "undefinded" ? covenant_progress.chosen_covenant.name + "Reconocimiento" + covenant_progress.renown_level : "Sin covenant"}</INF>
        </Extras>
        <Extras>
        <SUP>Nivel de objeto {equipped_item_level} ({average_item_level})</SUP>
          <INF>Puntos de logros {achievement_points}</INF>
        </Extras>
      </DivResumen>



      <DivResumen>
      <Imagen src={LogoHorda} alt="Logo"/>
        <Personaje>
          <Nombre>Cachuloo</Nombre>
          <Titulo>Maestro Cervecero</Titulo>
        </Personaje>
        <Extras>
          <SUP>Ragnaros</SUP>
          <INF>Rocket</INF>
        </Extras>
        <Extras>
          <SUP>Elfo de Sangre Cazador Punteria 88</SUP>
          <INF>Noctieéricos Reconocimiento 88</INF>
        </Extras>
          <SUP> </SUP>
          <INF></INF>
        <Extras>
          <SUP>Nivel de objeto 888(888)</SUP>
          <INF>Puntos de logros 8888</INF>
        </Extras>
      </DivResumen>
    </Fragment>