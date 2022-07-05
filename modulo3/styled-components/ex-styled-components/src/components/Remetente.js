import React from 'react';
import {Formulario} from '../style.js';

const Remetente=()=>{
    return (
    <Formulario>
        <label htmlFor='remetente'>Remetente:</label>
        <input type='text' id='remetente'/>
        <label htmlFor='mensagem'>Mensagem:</label>
        <input type='text' id='mensagem'></input>
        <input typr='submit' value='Enviar mensagem'></input>
    </Formulario>
    );
}

  export default Remetente;