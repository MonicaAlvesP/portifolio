import React from "react";
import Navegacao from "./components/Navegacao";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{

    background-image: url('../src/assets/background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    font-family: "Moon Flower", sans-serif;
  }
`

export default function App() {
  return(
    <>
      <GlobalStyle />
      <Navegacao />
    </>
  )
}