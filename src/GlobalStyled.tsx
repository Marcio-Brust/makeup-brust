import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Work Sans', sans-serif;

  }

  li{
    list-style:none;
  }
  a{
    display:block;
    text-decoration:none;
    }

`;
