import React, {useState} from 'react';
import Post from './components/Post/Post';
import InstaFour from './components/InstaFour/InstaFour.js';
import Perfil from './img/perfil-vitoria.jpeg';
import Perfil2 from './img/perfil2-vitoria.jpeg';
import Oceano from './img/oceano.jpg';
import Ceu from './img/ceu.webp';
import {Container} from './style';
import {MyForm} from './style.js';


function App() {
   const [inputName, setInputName]=useState("");
   const [inputUsuario, setInputUsuario]=useState("");
   const [inputMensagem, setInputMensagem]=useState("");

   
 const mudaNome=(event)=>{
  setInputName(event.target.value)
  console.log();
  console.log(inputName);
}

const mudaUsuario=(event)=>{
  setInputUsuario(event.target.value)
  console.log(inputUsuario);
}

const mudaMensagem=(event)=>{
  setInputMensagem(event.target.value)
  console.log(inputMensagem);
}

const adicionar=(e)=>{
  e.preventDefault()
  console.log("Botão pressionado!")
  setInputName("")
  setInputUsuario("")
  setInputMensagem("")
}

return(
  <Container>
      <MyForm action=''>
        <input type='text' required placeholder='Nome' value={inputName} onChange={mudaNome}></input>
        <input type='text'required placeholder='NomeUsuario' value={inputUsuario} onChange={mudaUsuario}></input>
        <input type='text'required placeholder='Mensagem' value={inputMensagem} onChange={mudaMensagem}></input>
        <button onClick={adicionar}>Adicionar</button>
      </MyForm>
               
           <InstaFour/>

           <Post
            nomeUsuario={'Paulinha'}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
           <Post
            nomeUsuario={'Vics'}
            fotoUsuario={Perfil}
            fotoPost={Oceano}
          />
           <Post
            nomeUsuario={'Vivi'}
            fotoUsuario={Perfil2}
            fotoPost={Ceu}
          />
  </Container>  
)

}


export default App;
