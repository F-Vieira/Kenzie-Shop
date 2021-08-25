import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --blue: #1d2c5a;
    --dark-blue: #0c1839;
    --light-blue: #6ba7db;
    --snow-blue: #a6c6e1;
    --marine-blue: #25c3bc;
    --white: #f9f1f9;

    --font-title: 'Great Vibes', cursive;
    --font-text: 'Comfortaa', cursive;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body{
    font-family: var(--font-text);
  }

  button{
    cursor: pointer;
  } 

  input, button {
    border: none;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;
