import React from 'react';
import {Cabecalho} from '../style.js';
import Chat from '../chat.png';


function Header() {
    return(
       
          <Cabecalho>
             <img src={Chat} texto="Imagem" alt="Chat"/>
             <h1>WhatsLab!</h1>
          </Cabecalho>
          

    );
}

export default Header;