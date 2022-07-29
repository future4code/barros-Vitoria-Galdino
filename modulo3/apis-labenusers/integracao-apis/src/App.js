import './App.css';

import React from 'react';
import Formulario from './components/Formulario.js'
import Usuario from './components/Usuarios.js'

export default class App extends React.Component {
    state = {
    mudaPagina: "informacoes"
   };

   changePage = () => {
    if (this.state.mudaPagina === "informacoes" ) {
      this.setState({mudaPagina: "usuarios"});
    }else{
      this.setState({mudaPagina: "informacoes"})
    }
  
  return (
    <div className="App">
      <button onClick={this.changePage}>Trocar de Tela</button>
      {this.state.mudaPagina === "Informacoes" ? <Formulario /> : <Usuario/>}
    </div>
  );
 }
}


