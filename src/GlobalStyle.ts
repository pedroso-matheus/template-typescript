// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    background-color: #00172f;
  }

  h1{
    color: #daebfd;
    font-size: 25px;
  }

  h2{
    color: #daebfd;
    font-size: 22x;    
  }

  p, span, div, td, a {
    color: #daebfd;
    font-size: 16px;    
  }

  td, th {
    text-align: left;
  }

`;



export default GlobalStyle;