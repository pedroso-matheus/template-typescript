// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  #root {
    background-color: #fff;
  }

  h1{
    color: #222;
    font-size: 25px;
  }

  h2{
    color: #222;
    font-size: 22x;    
  }

  p, span, div, td, a {
    color: #222;
    font-size: 16px;    
  }

  td, th {
    text-align: left;
  }

`;



export default GlobalStyle;