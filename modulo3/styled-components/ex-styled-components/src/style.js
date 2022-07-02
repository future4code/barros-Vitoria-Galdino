import styled from 'styled-components';

export const Cabecalho = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    img {
     width: 50px;
     height: 50px;
    }
  
  `

export const Pagina=styled.section`
  background-color: white;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  section{
    background-color: orange;
    width: 20%;
    height: 700px;
  }
  main{
    background-color: white;
    width: 60%;
  }
`
export const Formulario=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    height: 40px;
    padding: 0 20px;
`

export const Rodape = styled.footer`
  background: gray;
  color: white;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
`
