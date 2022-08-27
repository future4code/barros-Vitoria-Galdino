import useback from '../../hooks/useBack';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import useForm from '../../hooks/useForm';
import useReturn from '../../hooks/useReturn';
import Countries from '../../components/Countries/Countries';
import axios from 'axios';
import { useState } from 'react';

const FormDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    height: 100vh;
    color: white;
    z-index: 2; 
`
const OForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const urlTrip = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-galdino-barros/trips";

const PaginaInscricaoViagem = () => {
    const [form, onChange, clearForm] = useForm({
        nome: "",
        idade: 0,
        motivo: "",
        profissao: "",
        pais: "",
        viagemescolhida: null
    });
    const [trips, setTrips] = useState([]);

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

    const handleInputChange = (event) => {
        const { value, name } = event.target;
        onChange(value, name);
    }

    const onSubmitForm = (event) => {
        event.preventDefault();
        const body = {
            name: form.nome,
            age: form.idade,
            applicationText: form.motivo,
            profession: form.profissao,
            country: form.pais
        };

        axios
        .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/vitoria-galdino-barros/trips/${form.viagemescolhida}/apply`, body)
        .then((response) => {
            alert('Sua inscrição foi realizada com sucesso!')
            clearForm();
        })
        .catch((err) => {
            console.log(err.message)
            alert('Não foi possível fazer sua inscrição. Por favor, tente novamente')
        })   
    };

    return (
        <FormDiv>
            <OForm >
                <label>Nome</label>
                <input type={'text'} placeholder={'Nome'} name={'nome'} size='50' value={form.nome} onChange={handleInputChange} required ></input>
                <label>Idade</label>
                <input type={'number'} placeholder={'Idade'} name={'idade'} min='18' value={form.idade} onChange={handleInputChange} required ></input>
                <label>Por que você é um bom candidato?</label>
                <input type={'text'} placeholder={'Por que sou um bom candidato(a)?'} name={'motivo'} value={form.motivo} onChange={handleInputChange} required></input>
                <label>Profissão</label>
                <input type={'text'} placeholder={'Profissão'} name={'profissao'} value={form.profissao} onChange={handleInputChange} required></input>
                <label>País</label>
                <select type={'text'} placeholder={'País'} name={'pais'} value={form.pais} onChange={handleInputChange}><Countries /></select> 
                <label>Viagem escolhida:</label>
                <select placeholder={'Viagem escolhida:'} name={'viagemescolhida'} value={form.viagemescolhida} onClick={getTrips} onChange={handleInputChange} required>{trips.map((trip) => {
                    return <option value={trip.id}>{trip.name}</option> 
                })}</select>
                <Button variant="contained" color="secondary" onClick={onSubmitForm}>Inscrever-se</Button>
            </OForm>
            <br/>
            <Button onClick={useReturn()} variant="contained" color="secondary">Retornar para Lista de Viagens</Button> 
            <br/>
            <Button variant="contained" color="secondary" onClick={useback('/')}> Voltar para Home </Button>
        </FormDiv>
)}

export default PaginaInscricaoViagem;