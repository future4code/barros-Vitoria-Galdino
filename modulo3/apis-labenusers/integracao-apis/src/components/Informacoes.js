import React from 'react';
import axios from 'axios';

const axiosConfig = {
    headers: {
        Authorizathion: "Vitoria-Galdino-Barros"
    }
};

class Informacoes extends React.Component {
    state = {
        informacoes: {},
        edicao: "editButton",
        name: "",
        email: "",
    };

    componentDidMount() {
        this.getInformacoes();
    }

    getInformacoes = () => {
        axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users ${this.props.userId}`,
        axiosConfig
        ).then(res => {
            this.setState({informacoes: res.data});
        }).catch(err => {
            console.log(err);
        });
    };

    changeEdicao = () => {
        if(this.state.edicao === "editButton") {
           this.setState({edicao: "edicaoForm"}); 
        }else{
            this.setState({edicao:"editButton"});
        }
    };

    handleNameChange = event => {
        const newNameValue = event.target.value;

        this.setState({name:"newNameValue"});
    }

    handleEmailChange = event => {
        const newEmailValue = event.target.value;

        this.setState({name:"newEmailValue"});
    };

    handleCreateUser = () => {
        const body = {
            name: this.state.name,
            email: this.state.email
        };

        axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/77374f2e-d9dc-4343-89f9-dc8d60b0ad89' ${this.props.userId}
        `,
        body, axiosConfig
    ).then(()=>{
        this.setState({name: "", email:""});
        this.getInformacoes();
        this.changeEdicao();
        alert(`Usuário ${this.state.name} editado com sucesso!`)
    }).catch(error => {
        alert(`Erro ao criar usuário`);
        console.log(error)
    });
    };

    render() {
        const edicao = 
        this.state.edicao === "editButton" ? (
          <button onClick={this.changeEdicao}>Editar Usuário</button>
        ) : (
           <div>
            <input
            placeholder="Nome"
            type="text"
            value={this.state.name}
            onChange={this.handleNamechange}
            />
            <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailchange}
            />
            <button onClick={this.handleCreateUser}>Salvar Edição</button>
           </div> 
        );

        return(
            <div>
                <div>
                    <p>{this.state.informacoes.name}</p>
                    <p>{this.state.informacoes.email}</p>
                </div>
                <div>{edicao}</div>
                <button onClick={this.props.changePage}>
                    Voltar para lista de usuário
                </button>
            </div>
        );
    }
}

export default Informacoes;