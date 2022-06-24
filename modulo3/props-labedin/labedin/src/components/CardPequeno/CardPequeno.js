import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return(
        <div className="informacoes">
            
            <div className="email-endereco">
            <img src = {props.imagens} />
            <p>{props.email}</p>
            <p>{props.endereco}</p>

            </div>
        </div>

    )

}

export default CardPequeno;