import './App.css';

import axios from 'axios';
import React, {useState, useEffect} from 'react';


  function App() {
  const [minhaLista, setMinhaLista] = useState([]);

  useEffect(()=>{
    getAllUsers()
  }, [])

  const getAllUsers = () => {
    axios.get("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",{
      headers: {
        Authorization: 'Vitoria-Galdino-Barros'
      }
    }).then((res)=>{
      console.log(res.data.result.list)
      setMinhaLista(res.data.result.list)
    }).catch((er)=>{
      console.log(er.response)
    })
  }

  return (
    <div className="App">
     {minhaLista.map((lista)=>{
      return(
      <li key={lista.id}>{lista.name}</li>
      )
     })}
    </div>
  );
 
};

export default App;


