import styled from "styled-components";


export const CardContainer = styled.div`
    display: flex;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    padding: 10px 20px;
    border-radius: 4px;
    margin: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 460px;
    &:hover{
        cursor: pointer;
        background-color: black;
    }
`

export const DeleteButton = styled.button`
    padding: 10px;
    color: white;
    &:hover{
        cursor: pointer;
        background-color: white;
        border-radius: 24px;
        color: darkred;
    }
`