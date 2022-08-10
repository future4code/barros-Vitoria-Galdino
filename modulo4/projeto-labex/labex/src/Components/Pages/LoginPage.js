// Para fazermos login como administrador

import React from 'react';
import { useNavigate} from 'react-router-dom';
import {Button} from '../../style';

function LoginPage() {
    const navigate = useNavigate();
    
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
        <p>Página Login</p>
        <Button onClick={goToList}>Lista de viagens</Button>
        <Button onClick={goToCreate}>Criar Viagem</Button>
        <Button onClick={goToTripDetails}>Detalhes Viagem</Button>
        </section>
    )
}

export default LoginPage;