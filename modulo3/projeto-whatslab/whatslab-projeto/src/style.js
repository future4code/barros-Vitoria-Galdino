import styled from 'styled-components';

export const Cabecalho=styled.header`
   display: flex;
   justify-content: center;
   justify-items: center;
   align-items: center;
   padding: 0;
   margin: 0;
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
    margin: 0;
    padding: 0;
    width: 20%;
    height: 550px;
  }
  main{
    margin: 0;
    padding: 0;
    background-color: white;
    width: 80%;
  }
`
export const Rodape=styled.footer`
  display: flex;
  justify-content: center;
  position: relative;
  p{
    margin: 0;
    padding-top: 15px;
    padding-bottom: 40px;
    font-size: 25px;
    color: black;
    font-weight: bolder;
} 
`
export const Formulario=styled.form`
  display: flex;
  justify-content: center;
  position: relative;
  bottom: -526px;
  justify-items: left;
  background-color: orange;
input{
  display: inline-flex;
  justify-content: space-between;
  justify-items: center;
  border: 1px solid black;
}
button{
    border-radius: 1px solid black;
}
`
export const Usuario=styled.div`
   display: flex;
   justify-content: flex-end;
   padding-top: 40px;
button{
  color: white;
  background-color: black;
  border: 1px solid black;
  padding: 5px;
  margin: 0;
}
`

