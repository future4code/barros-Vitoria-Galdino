import React from 'react';
import { CardContainer, Imagem } from './styled'
import Gif from "./img/galaxiagif.gif"

const TripCard = (props) => {
    const {name, description, planet, durationInDays, date} = props.trip

    return(
        <CardContainer>
            <p><b>Nome:</b> {name}</p>
            <p><b>Descrição:</b> {description}</p>
            <p><b>Planeta:</b> {planet}</p>
            <p><b>Duração:</b> {durationInDays}</p>
            <p><b>Data:</b> {date}</p>
            <Imagem src={Gif} />
        </CardContainer>
    )

}

export default TripCard;