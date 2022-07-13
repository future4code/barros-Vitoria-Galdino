import React from 'react';
import {Login} from '../style'

const Etapa1=()=>{
  
return (
    <Login>
        <h1>Dados Gerais</h1>
        <form>
            <label>Nome:</label>
            <input type="text"></input>
            <label>Idade:</label>
            <input type="Number"></input>
            <label>E-mail:</label>
            <input type="text"></input>
            <label>Grau de escolaridade:</label>
            <select>
            <option>Ensino Médio Incompleto</option>
            <option>Ensino Médio Completo</option>
            <option>Ensino Superior Incompleto</option>
            <option>Ensino Superior Completo</option>
            </select>
        </form>
    </Login>
 );
}

export default Etapa1;