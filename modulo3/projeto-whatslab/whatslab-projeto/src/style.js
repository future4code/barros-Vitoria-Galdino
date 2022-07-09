import styled from 'styled-components';

export const Cabecalho=styled.header`
   display: flex;
   justify-content: center;
   justify-items: center;
   align-items: center;
   h1{
    font-size: 40px;
    font-weight: bolder;
    color: orange;
} img {
     display: flex;
     padding-right: 10px;
     width: 50px;
     height: 50px;
}
`
export const PaginaP=styled.aside`
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  aside{
    background-color: orange;
    width: 20%;
    height: 550px;
  }
  main{
    background-color: white;
    width: 80%;
  }
`
export const Rodape=styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  p{
    padding-bottom: 70px;
    font-size: 15px;
    color: black;
    font-weight: bolder;
} 
`
export const Formulario=styled.form`
  display: flex;
  justify-content: center;
  justify-items: center;
  div{
    display: flex;
    justify-content: center;
    justify-items: center;
}
button{
    border-radius: 1px solid black;
}
`
export const Usuario=styled.div`
   display: flex;
   justify-content: flex-end;
   padding-top: 40px;
`
