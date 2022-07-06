import React from 'react';
import Post from '../Post/Post';

const InstaFour=()=>{
    const listaPost=[
     {nomeUsuario:"Paulinha",
     fotoUsuario:"https://picsum.photos/50/50",
     fotoPost:"https://picsum.photos/200/150"},

     {nomeUsuario:"Vics",
     fotoUsuario:"https://picsum.photos/50/50",
     fotoPost:"https://picsum.photos/200/150"},

     {nomeUsuario:"Vivi",
     fotoUsuario:"https://picsum.photos/50/50",
     fotoPost:"https://picsum.photos/200/150"},
  ]
  
  let arrayPost=listaPost.map((elemento, index)=>{
       return(
               <li key={index}><Post nomeUsuario={elemento.nomeUsuario} fotoUsuario=
               {elemento.fotoUsuario} fotoPost={elemento.fotoPost}/></li> 
   )
  })
  
  console.log(listaPost)
  
       return(
          <div>
            <ul>
            {arrayPost}
            </ul>
          </div>
     );
  }
  
  export default InstaFour;