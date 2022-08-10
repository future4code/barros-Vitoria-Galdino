// Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from 'react';
import { useNavigate} from 'react-router-dom';
import {Button, Paragrafo} from '../../style';

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
        <Paragrafo>Administrador</Paragrafo>
        <Button onClick={goToHome}>Pagina inicial</Button>
        <Button onClick={goToLogin}>Login</Button>
        <Button onClick={goToList}>Lista de viagens</Button>
        <Button onClick={goToCreate}>Criar Viagem</Button>
        <Button onClick={goToTripDetails}>Detalhes Viagem</Button>
        <Button onClick={goToLastPage}>Retornar</Button>
        </section>
    )
}

export default AdminHomePage;