// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from 'react';
import { useNavigate} from 'react-router-dom';
import {Button} from '../../style';

function AdminHomePage() {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate("/HomePage")
    }

    const goToLastPage = () => {
        navigate(-1)
    }

    const goToLogin = () => {
      navigate("/LoginPage")
    }

   

    return(
        <section>
        <p>Administrador</p>
        <Button onClick={goToHome}>Pagina inicial</Button>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToLastPage}>Retornar</Button>
        </section>
    )
}

export default AdminHomePage;