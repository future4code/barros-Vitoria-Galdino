import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemEmail from './components/Imagens/envelope.jpeg';
import ImagemEnd from './components/Imagens/casa.jpeg';
import Perfil from './components/Imagens/perfil-vitoria.jpeg'


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil}
          nome="Vitória" 
          descricao="Oi, eu me chamo Vitória. Sou estudante de Web Full Stack, na instituição de ensino Labenu. No meu tempo livre, quando não estou codando, gosto de ler, assistir séries e ouvir música, uma banda que amo muito ouvir é Imagine Dragons ♥."
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
       </div>

       <div className="email">
        <CardPequeno 
        imagens={ImagemEmail}
        email="Email: vitoria.galdino@gmail.com"
        />

        <CardPequeno 
        imagens={ImagemEnd}
        endereco="Santo André - São Paulo"
        />

       </div>
       
      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Estudante de Web Full Stack!" 
        />
        
        <CardGrande 
          imagem="https://logodownload.org/wp-content/uploads/2019/03/nasa-logo-0-768x768.png" 
          nome="Nasa" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
