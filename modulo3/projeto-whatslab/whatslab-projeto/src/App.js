import {Cabecalho} from './style';
import Imagem from './img/chat.png';
import Main from './components/Main';
import Footer from './components/Footer';
import Mensagem from './components/Mensagem/Mensagem';

function App() {
  return (
    <div className="App">
      <Cabecalho>
        <img src={Imagem} texto="Imagem" alt="Imagem-Chat"/>
        <h1>WhatsLab!</h1>
      </Cabecalho>
      <Main/>
      <Mensagem/>
      <Footer/>
      
    </div>
  );
}

export default App;
