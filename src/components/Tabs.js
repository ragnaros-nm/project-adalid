import React, {useState} from 'react';
import './Tabs.css';
import imagen from '../assets/orc-white.png';
import styled from '@emotion/styled';
import Loading from './Loading';

const Cargando= styled.div`
  width: 100px;
  margin:70px auto;
`;

const Tabs = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };

    setTimeout(()=>{
      setIsLoading(false);                  
    }, 3000)
  
    return (
      <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Equipo
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Estadisticas
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Guild
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            PvP
          </button>
        </div>
  
        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            {isLoading ? <Cargando><Loading/></Cargando>: 
            <div>
              <h2>Equipo de tu personaje</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
                vel voluptatum?
              </p>
            </div>
            }
            
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            {isLoading ? <Cargando><Loading/></Cargando>: 
            <div>
              <h2>Estadisticas del equipo</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
                voluptatum qui adipisci.
              </p>
            </div>
            }
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            {isLoading ? <Cargando><Loading/></Cargando>: 
          <div>
          <h2>Informacion de tu hermandad</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div>}
          </div>
          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >{isLoading ? <Cargando><Loading/></Cargando>: 
            <div>
              <h2>Jugador contra jugador</h2>
              <hr />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
                nostrum rerum laudantium totam unde adipisci incidunt modi alias!
                Accusamus in quia odit aspernatur provident et ad vel distinctio
                recusandae totam quidem repudiandae omnis veritatis nostrum
                laboriosam architecto optio rem, dignissimos voluptatum beatae
                aperiam voluptatem atque. Beatae rerum dolores sunt.
              </p>
            </div>
          }
          </div>
        </div>
      </div>
    );
  }
 
export default Tabs;