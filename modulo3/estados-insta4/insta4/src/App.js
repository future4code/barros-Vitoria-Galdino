import React from 'react';
import Post from './components/Post/Post';
import InstaFour from './components/InstaFour/InstaFour.js';
import Perfil from './img/perfil-vitoria.jpeg';
import Perfil2 from './img/perfil2-vitoria.jpeg';
import Oceano from './img/oceano.jpg';
import Ceu from './img/ceu.webp';
import {Container} from './style';


function App() {
return(
  <Container>
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
