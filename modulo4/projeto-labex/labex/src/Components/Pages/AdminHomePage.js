// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from 'react';
import { useNavigate, useParams} from 'react-router-dom';
import {Button} from '../../style';

function AdminHomePage() {
    const navigate = useNavigate();
    const pathParams = useParams();
    const login = pathParams.login;

    const goToHome = () => {
        navigate("/HomePage")
    }

    const goToLastPage = () => {
        navigate(-1)
    }

    const goToLogin = () => {
      navigate("/LoginPage")
    }

    const goToList = () => {
        navigate("/ListTripsPage")
    }

    const goToCreate = () => {
        navigate("/CreateTripPage")
    }

    const goToTripDetails = () => {
        navigate("/TripDetailsPage")
    }

    return(
        <section>
        <p>{login === "login" ? "Administrador" : "login"}Administrador</p>
        <Button onClick={goToHome}>{login === "login" ? "Pagina inicial" : "HomePage"}Pagina inicial</Button>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToList}>Lista de viagens</Button>
        <Button onClick={goToCreate}>Criar Viagem</Button>
        <Button onClick={goToTripDetails}>Detalhes Viagem</Button>
        <Button onClick={goToLastPage}>{login === "login" ? "Retorne" : "Return"}</Button>
        </section>
    )
}

export default AdminHomePage;