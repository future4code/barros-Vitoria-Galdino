// Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button, Paragrafo} from '../../style.js';

function HomePage() {
    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate("/AdminHomePage")
    }

    const goToListTrip = () => {
        navigate("/ListTripsPage")
    }

    const goToApplicationForm = () => {  
        navigate("/ApplicationFormPage")
    }

    return(
        <section>
        <Paragrafo>Página inicial</Paragrafo>
        <Button onClick={goToAdminHome}>Administrador</Button>
        <Button onClick={goToListTrip}>Lista De Viagens</Button>
        <Button onClick={goToApplicationForm}>Formulário</Button>
        </section>
    )
}

export default HomePage;