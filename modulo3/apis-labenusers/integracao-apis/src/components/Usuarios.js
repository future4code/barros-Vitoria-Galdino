import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import Informacoes from './Informacoes.js'

const DeletaBotao = styled.span`
 color: orange;
 cursor: pointer;
`;

const axiosConfig = {
    headers: {
        Authorization: "Vitoria-Galdino-Barros"
    }
};

class Usuario extends React.Component {
    state = {
        usuarioLista: [],
        mudaPagina: "usuarioLista",
        userId: "",
        name: ""
    };

    componentDidMount() {
        this.fetchUsuarioLista();
    }

    fetchUsuarioLista = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then(response => {
        this.setState({ usuarioLista: response.data });
      });
  };

  handleUserDeletion = userId => {
    if (window.confirm("Tem certeza que deseja apagar o usuário?")) {
      axios
        .delete(
          `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
          axiosConfig
        )
        .then(() => {
          alert("Usuário apagado com sucesso!");
          this.fetchUsuarioLista();
        })
        .catch(e => {
          alert("ERRO AO APAGAR USUARIO");
        });
    }
  };
  
  changePage = userId => {
    if (this.state.mudaPagina === "usuarioLista") {
      this.setState({mudaPagina: "Informacoes", userId: userId });
    } else {
      this.setState({ mudaPagina: "usuarioLista", userId: "" });
    }
  };

  handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({ name: newNameValue });
  };

  handleSearchUser = () => {
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${this.state.name
        }&email=`,
        axiosConfig
      )
      .then(response => {
        this.setState({ usuarioLista: response.data });
      })
      .catch(error => {
        alert("Erro ao criar o usuário");
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        {this.state.mudaPagina === "usuarioLista" ? (
          <div>
            <ul>
              {this.state.usuarioLista.length === 0 && <div>Carregando...</div>}
              {this.state.usuarioLista.map(user => {
                return (
                  <li>
                    <span onClick={() => this.changePage(user.id)}>
                      {user.name}
                    </span>
                    <DeletaBotao
                      onClick={() => this.handleUserDeletion(user.id)}
                    >
                      X
                    </DeletaBotao>
                  </li>
                );
              })}
            </ul>
            <hr />
            <h4>Procurar usuário</h4>
            <input
              placeholder="Nome exato para busca"
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <button onClick={this.handleSearchUser}>Salvar edição</button>
          </div>
        ) : (
          <Informacoes userId={this.state.userId} changePage={this.changePage} />
        )}
      </div>
    );
  }
}

export default Usuario;
    
