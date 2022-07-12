import React from 'react';
import {Login} from '../style'

const Etapa3=()=>{
   return(
    <Login>
    <h1>Informações para quem não se formou no ensino superior, nem está cursando:</h1>
    <form>
    <label>Por que você não terminou um curso de graduação?</label>
    <input type="text"></input>
    <label>Você fez algum curso complementar?</label>
    <select>
        <option>Curso Técnico</option>
        <option>Cursos de Inglês</option>
        <option>Não fiz curso complementar</option>
    </select>
    </form>
    </Login>
   );
}


export default Etapa3;