// LISTA DE VIAGEM ADM COM OS DETALHES

import React, { useEffect, useState } from 'react' 
import { useNavigate } from 'react-router-dom'
import useBack from '../../hooks/useBack'
import styled from 'styled-components';
import axios from 'axios';
import Card from '../ListaDeViagens/Card';
import Button from '@mui/material/Button';
import useProtectedPage from '../../hooks/useProtectedPage';

const ListaDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #0000;
    height: 100%;
    color: white;
    z-index: 2;
`
const CatalogoDiv = styled.div`
    display: grid;
    grid-template: 1fr 1fr / repeat(4, 1fr);
    gap: 1em;
    width: 75vmax;
    color: white;
    z-index: 2;
    margin-bottom: 100px; 
`
const Titulo = styled.h2`
    display: flex;
    justify-content: center;
    flex-grow: 1;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
`
const ButtonDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 35vw;
    z-index: 2;
`

const urlTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-galdino-barros/trips";

const ListaDeViagens = () => {
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate();

    useProtectedPage()

    useEffect(() => {
        getTrips();
    }, [navigate]);

    const getTrips = () => {
        axios.get(urlTrip)
        .then((response) => {
            setTrips(response.data.trips);
            console.log(response.data.trips)
        })
        .catch((erro) => {
            console.log(erro.message);
        });
    }
    
    return (        
        <ListaDiv>
            <Titulo>Lista de Viagens</Titulo>
            <CatalogoDiv>
                {trips.map((trips) => {
                    return <Card trips={trips}/>
                })}
            </CatalogoDiv>
            <ButtonDiv>
            <Button variant="contained" color="secondary" onClick={useBack('/')}> Voltar para Home </Button>
            <Button variant="contained" color="secondary" onClick={useBack('/adm')}> Voltar para painel administrativo </Button>
            </ButtonDiv>
        </ListaDiv>
)}

export default ListaDeViagens