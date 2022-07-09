import React, {useState} from 'react';
import {Formulario} from '../../style'

const Mensagem=()=>{

const[inputRemetente, setInputRemetente]=useState("");
const[inputMensagem, setInputMensagem]=useState("")

const mudaRemetente=(event)=>{
    setInputRemetente(event.target.value)
    console.log(inputRemetente);
}

const mudaMensagem=(event)=>{
    setInputMensagem(event.target.value)
    console.log(inputMensagem)
}

const enviar=()=>{
    console.log("Mensagem enviada!")
}

    return(
        <Formulario>
          <div>
            <input type='text' required placeholder='Remetente' value={inputRemetente} onChange={mudaRemetente}></input>
            <input type='text' required placeholder='Mensagem' value={inputMensagem} onChange={mudaMensagem}></input>
            <button onClick={enviar}>Enviar</button>
          </div>
        </Formulario>

    );
}

export default Mensagem;