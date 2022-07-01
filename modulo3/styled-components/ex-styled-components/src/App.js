import {Cabecalho} from './style.js';
import Footer from './components/Footer';
import Principal from './components/Principal';



function App() {
  return (
    <div className="App">
      <Cabecalho>
        <p>WhatsLab</p>
      </Cabecalho>

      <Principal/>
      
    

      <Footer/>
    </div>
  );
}

export default App;
