import React from "react";
import Navegacao from "./components/Navegacao";
import { createGlobalStyle } from 'styled-components'
import BackgroundImage from '../src/assets/img/background.jpg'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    background-image: url('../src/assets/img/background.jpg');
    background-size: cover;
    background-position: center;
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