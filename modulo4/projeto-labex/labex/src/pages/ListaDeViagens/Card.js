// LISTA DE VIAGEM ADM COM OS DETALHES

import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import useBack from '../../hooks/useBack';

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: baseline;
  color: white;
  border-radius: 10px;
  background-color: rgb(239, 45, 86, 1);
  margin-left: 5px;
  margin-right: 5px;
  padding: 10px 20px 20px 20px;
`
const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Imagem = styled.img`
 width: 200px;
 height: 200px;
 padding-left: 10px;
`

const Card = (props) => {

    return (        
        <div>
            <CardDiv>
              <div></div>
              <div><h3><strong>{props.trips.name}</strong></h3></div>
              <div><em>{props.trips.planet}</em></div>
              <div><em>{props.trips.date}</em></div>
              <Imagem src={`https://acegif.com/wp-content/uploads/gif/outerspace-59.gif`} />
              <br/>
              <div>{props.trips.description}</div>
              <br/>
              <ButtonDiv>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={useBack('/application-form')}> Inscrever </Button>              
                  <Button 
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={useBack(`/trips/details/${props.trips.id}`)}> Detalhes </Button>  
              </ButtonDiv>
            </CardDiv>
            
        </div>
)}

export default Card