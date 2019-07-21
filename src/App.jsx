import React from "react";
import { createGlobalStyle } from 'styled-components'

import { reset, Wrapper } from './assets/style'
import { Routes } from './routes';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
 
  }
  /* other styles */
`

export function App() {
  return (
    <Wrapper>
      <GlobalStyle />
      <Routes />
    </Wrapper>
  )
}
