// Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Button} from '../../style.js';

function HomePage() {
    const navigate = useNavigate()

    const goToAdminHome = () => {
        navigate("/AdminHomePage/login")
    }

    const goToListTrip = () => {
        navigate("/ListTripsPage")
    }

    const goToApplicationForm = () => {  
        navigate("/ApplicationFormPage")
    }

    return(
        <section>
        <p>Página inicial</p>
        <Button onClick={goToAdminHome}>Administrador</Button>
        <Button onClick={goToListTrip}>Lista De Viagens</Button>
        <Button onClick={goToApplicationForm}>Formulário</Button>
        </section>
    )
}

export default HomePage;