import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import AdminHomePage from './AdminHomePage';
import ApplicationFormPage from './ApplicationFormPage';
import CreateTripPage from './CreateTripPage';
import HomePage from './HomePage';
import ListTripsPage from './ListTripsPage';
import LoginPage from './LoginPage';
import TripDetailsPage from './TripDetailsPage';

function Router() {
    return( 
       <BrowserRouter>
          <Routes>
            <Route index element={ <HomePage/> } />
            <Route path="Administrador/:login" element={ <AdminHomePage/> } />
            <Route path="Aplicacao-Formulario" element={ <ApplicationFormPage/> } />
            <Route path="Criar-Viagem" element={ <CreateTripPage/> } />
            <Route path="Lista-Viagem" element={ <ListTripsPage/> } />
            <Route path="Logar" element={ <LoginPage/> } />
            <Route path="Detalhes-Viagem" element={ <TripDetailsPage/> } />
          </Routes>
       </BrowserRouter>
    );
}

export default Router;