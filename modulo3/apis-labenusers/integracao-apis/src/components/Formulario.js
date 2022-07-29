import React from 'react';
import axios from 'axios';

class Formulario extends React.Component{
   state = {
    name: "",
    email: ""
   };

   handleNameChange = event => {
    const newNameValue = event.target.value;

    this.setState({name: newNameValue});
   };

   handleEmailChange = event => {
    const newEmailValue = event.target.value;

    this.setState({email: newEmailValue});
   };

   handleCreateUser = () => {
    const axiosConfig = {
        headers: {
            Authorizathion: "Vitoria-Galdino-Barros"
        }
    };

    const body = {
        name: this.state.name,
        email: this.state.email
    };

    axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
    body, axiosConfig
    ).then(()=> {
        alert(`Usuario ${this.state.name} criado com sucesso!`);
        this.setState({name:"", email: ""});
    }).catch((er)=>{
        alert("Erro ao criar o usuário");
        console.log(er)
    });
   };

   render() {
    return(
        <div>
          <input
            placeholder="Nome"
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
        />
         <input
            placeholder="E-mail"
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange}
        />
        <button onClick={this.handleCreateUser}>Criar Usuário</button>
       </div>
    );
   }
}

export default Formulario;