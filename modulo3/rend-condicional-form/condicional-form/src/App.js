import './App.css';
import Etapa1 from './components/Etapa1'
import {ButtonLogin, Login} from './style'


function App() {
  return (
    <div className="App">
      <Login>
      <Etapa1/>
      <ButtonLogin>Próxima Etapa</ButtonLogin>
      </Login>
    </div>
  );

}



export default App;
