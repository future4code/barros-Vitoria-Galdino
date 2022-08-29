import React from 'react'
import styled from 'styled-components';
import galaxy from '../HomePage/img/background-galaxy.webp'
import Button from '@mui/material/Button';
import logog from '../HomePage/img/LabeX-Fundo.png';
import useBack from '../../hooks/useBack';

const HomeDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
`
const HomeImg = styled.img`
    display: flex;
    width: 100vw;
    height: auto;    
    position: absolute;
    z-index: 0;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35vw;
    z-index: 2;
    margin-top: -400px;
`
const ImgLogo = styled.img`
    display: flex;
    z-index: 2;
    margin-bottom: 40px;
    margin-top: -200px;
`

const HomePage = () => {

    return( 
        <HomeDiv>           
            <HomeImg src={galaxy} />
            <ImgLogo src={logog}/>
            <ButtonDiv>
                <Button onClick={useBack('/list/trips')} variant="contained" color="secondary">Lista de viagens</Button> 
                <Button onClick={useBack('/login')} variant="contained" color="secondary">Login</Button>
            </ButtonDiv>
        </HomeDiv>
        )
}

export default HomePage;