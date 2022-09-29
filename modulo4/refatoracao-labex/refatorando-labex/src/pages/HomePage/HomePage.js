import React from 'react';
import { goToListTripsPage, goToLoginPage } from '../../routes/Coordinator'
import { useNavigate  } from 'react-router-dom'
import { ButtonsContainer, Labex } from "./styled"
import Logo from "./img/LabeX-Fundo.png"

const HomePage = () => {
    const navigate = useNavigate ()
    return (
        <>
            <Labex src={Logo} />
            <ButtonsContainer>
                <button onClick={() => goToListTripsPage(navigate)}>Ver Viagens</button>
                <button onClick={() => goToLoginPage(navigate)}>Área de Admin</button>
            </ButtonsContainer>
        </>
    )

}

export default HomePage;