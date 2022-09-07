import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Login from '../pages/Login/Login';
import PaginaInscricaoViagem from '../pages/PaginaInscricaoViagem/PaginaInscricaoViagem';
import ListaDeViagens from '../pages/ListaDeViagens/ListaDeViagens';
import CriarViagem from '../pages/CriarViagem/CriarViagem';
import DetalhesViagem from '../pages/DetalhesViagem/DetalhesViagem';
import Header from '../components/Header/Header';
import AreaAdm from '../pages/AreaAdm/AreaAdm';
import ListTripP from '../pages/ListTripP/ListTripP'

const Router = () => {
    return(
        <BrowserRouter>
           <Header />
        <Routes>

            <Route index element= { <HomePage/> } />

            <Route path="/login" element= { <Login/> } />

            <Route path="/application-form" element={ <PaginaInscricaoViagem/> } />

            <Route path="/list/trips" element={ <ListTripP/> } />

            <Route path="/trips/list" element={ <ListaDeViagens/> } />

            <Route path="/trips/create" element={ <CriarViagem/> } />

            <Route path="trips/details/:tripId" element={ <DetalhesViagem/> } />

            <Route path="/adm" element={ <AreaAdm/> } />

        </Routes>
        </BrowserRouter>
    );
};

export default Router;