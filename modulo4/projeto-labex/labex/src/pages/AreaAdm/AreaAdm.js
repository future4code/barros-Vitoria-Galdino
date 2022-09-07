import React from 'react';
import styled from 'styled-components';
import '../../pages/AreaAdm/style.css'
import useBack from '../../hooks/useBack';
import Button from '@mui/material/Button';
import useProtectedPage from '../../hooks/useProtectedPage';

const BackgroundDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`

const AreaAdm = () => {
    useProtectedPage()


    return (      

        <div class='primeiradiv'>
            <h2>Painel Administrativo</h2>
            <BackgroundDiv>        
                    <div class="container">
                        <img src='https://www.spazioinfinito.net/wp-content/uploads/2018/10/allineamento-pianeti-1217.jpg'/>
                        <button class="btn" variant="contained" color="secondary" onClick={useBack('/trips/list')}>Viagens</button>
                    </div>
                    <div class="container">
                        <img src='https://4.bp.blogspot.com/-XJnd2_TY8nM/WNPKp_TWA_I/AAAAAAAAP04/as44xby5khshYaDASO1tpI_UpG9uu9ntACLcB/s1600/deus%2Buniv.jpg'/>
                        <button class="btn" variant="contained" color="secondary" onClick={useBack('/trips/create')}>Criar Viagem</button>
                    </div>
            </BackgroundDiv>
            <Button variant="contained" color="secondary" onClick={useBack('/')}>Voltar para Home</Button>

        </div>
)}

export default AreaAdm;