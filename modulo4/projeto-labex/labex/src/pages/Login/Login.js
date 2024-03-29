import React, { useState } from 'react';
import useBack from '../../hooks/useBack';
import styled from 'styled-components';
import astronauta from '../Login/img/astronauta-space.png';
import Button from '@mui/material/Button';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const DivBase = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80vw;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin-left: auto;
`
const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 140vw;
    height: 100vh;
`
const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    width: 20vw;
    height: 20vh;
    margin-top: 20px;
`
const ImgAstronauta = styled.img`
    width: 40%;
    height: auto;
`

const urlLogin = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-galdino-barros/login";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        };
        axios
            .post(urlLogin, body)
            .then((response) => {
                localStorage.setItem("token", response.data.token);
                navigate('/adm');
            })
            .catch((err) => {
                console.log(err);
            });    
    };

    return (       
        <DivBase>
            <ImgAstronauta src={astronauta}/>
            <LoginForm>
                <h2>Login</h2>
                <label>Email</label>
                <input value={email} type="email" onChange={onChangeEmail} size='35' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"></input>
                <label>Senha</label>
                <input value={password} onChange={onChangePassword} type='password' size='35' required></input>
                    <ButtonDiv>
                        <Button onClick={login('/adm')} size="small" variant="contained" color="secondary">Fazer login</Button>
                        <Button onClick={useBack('/')} size="small" variant="contained" color="secondary"> Voltar para home </Button>
                    </ButtonDiv>
            </LoginForm>
        </DivBase>
)}

export default Login
