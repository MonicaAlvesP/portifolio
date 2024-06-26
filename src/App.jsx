import React from "react";
import Navegacao from "./components/Navegacao";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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