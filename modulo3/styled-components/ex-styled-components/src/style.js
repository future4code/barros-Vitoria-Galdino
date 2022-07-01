import styled from 'styled-components';

export const Cabecalho = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      font-size: 40px;
      font-weight: bolder;
    }
  `

export const Rodape = styled.footer`
  background: gray;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  padding: 0 10px;
  justify-content: center;
`
export const Pagina=styled.aside`
  background-color: pink;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  padding: 0;
  margin: 0;

  aside{
    background-color: orange;
    width: 20%;
    height: 700px;
  }
  main{
    background-color: white;
    width: 60%;
  }
`
