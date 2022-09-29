import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    background-image: url("https://static.vecteezy.com/ti/vetor-gratis/p1/3398718-fundo-de-galaxia-da-via-lactea-vetor.jpg");
    margin: 30px 0;
    padding: 0;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
  }

  button {
    margin-bottom: 15px;
    height: 40px;
    padding: 0 20px;
    border-radius: 20px;
    border: none;
    color: white;
    font-size: 16px;
    background-color: #ec0a68;
    min-width: 100px;

    &:hover{
      cursor: pointer;
      background-color: black;
      color: white;
    }
  }

  input {
    width: 100%;
    height: 30px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    border-color: gray;
    margin: 0 0 15px 0;
  }

  select {
    width: 518px;
    height: 40px;
    border-radius: 10px;
    padding: 4px 8px;
    border-width: 1px;
    margin: 0 0 15px 0;
  }

  h1, h2, b {
    color: white;
  }

  h1 {
    text-align: center;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  h2 {
    text-align: center;

    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  p {
    color: white;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export default GlobalStyle;