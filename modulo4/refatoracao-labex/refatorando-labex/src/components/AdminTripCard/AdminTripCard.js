import React from 'react';
import { CardContainer, DeleteButton } from './styled'
import { useNavigate } from 'react-router-dom'
import { goToTripDetailsPage } from '../../routes/Coordinator'
import { deleteTrip } from '../../services/request'

const AdminTripCard = (props) => {
    const { id, name, getTrips } = props
    const history = useNavigate ()

    const onClickDelete = (e) => {
        e.stopPropagation()
        if (window.confirm(`Tem certeza que deseja deletar a viagem ${name}?`)) {
            deleteTrip(id, getTrips)
        }
    }

    return (
        <CardContainer onClick={() => goToTripDetailsPage(history, id)}>
            <p> {name} </p>
            <DeleteButton onClick={onClickDelete}> Deletar </DeleteButton>
        </CardContainer>
    )

}

export default AdminTripCard;