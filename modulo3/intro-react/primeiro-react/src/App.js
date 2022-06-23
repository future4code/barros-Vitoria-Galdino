import perfil from './perfil2-vitoria.jpeg';
import './App.css';

function App() {
  const frase = "Olá! Eu sou a Vitória!"
  function mensagem() {
    alert("Que hoje seu dia tenha sido incrível! Tenha uma ótima noite!")
  }
  return (
    <div className="App">
      <header className="App-header">
        <h2>{frase}</h2>
        <img src={perfil} className="Vitoria" alt="Imagem Vitória" />
        <p>
          Este é o meu primeiro site React
        </p>
        <button onClick={mensagem}>Aperte este botão</button>
      </header>
    </div>
  );
}

export default App;
