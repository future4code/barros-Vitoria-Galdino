import React, {useState} from 'react';
import {Formulario} from '../../style'
import {Usuario} from '../../style'

const Mensagem=()=>{

const [usuario, setUsuario]=useState([
    {nome:"", msg:""}
])

const usuario2 = usuario.map((item,index)=>{
      return(
        <Usuario key={index}>
            <p>{item.nome}</p>
            <p>{item.msg}</p>
            <button onClick={()=>remover(index)}>X</button>
        </Usuario>
      )
})

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

const enviar=(event)=>{
    event.preventDefault()
    const boxAtualizada = [...usuario,{nome:inputRemetente, msg:inputMensagem}]
    setUsuario(boxAtualizada)
    console.log("Mensagem enviada!")
    setInputRemetente("")
    setInputMensagem("")
}

const remover=(indexRemover)=>{
    const boxAtualizada=usuario.filter((item, index)=>{
        return index !== indexRemover;
    })
    setUsuario(boxAtualizada)
}
    return(
        <>
        <Formulario action="">
          <div>
            <input type='text' required placeholder='Remetente' value={inputRemetente} onChange={mudaRemetente}></input>
            <input type='text' required placeholder='Mensagem' value={inputMensagem} onChange={mudaMensagem}></input>
            <button onClick={enviar}>Enviar</button>
          </div>
        </Formulario>

        <div>
          {usuario2}
          </div>
        </>
        
    );
}

export default Mensagem;