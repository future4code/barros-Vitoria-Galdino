import React from 'react';
import {Login} from '../style'

const Etapa2=()=>{

   return(
     <Login>
        <h1>Informações Educacionais para quem está cursando (ou já terminou) o ensino superior:</h1>
        <form>
        <label>Qual curso?</label>
        <input type="text"></input>
        <label>Qual a unidade de ensino?</label>
        <input type="text"></input>
        </form>
     </Login>

   );
}

export default Etapa2;