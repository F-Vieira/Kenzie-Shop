import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --blue: #1d2c5a;
    --dark_blue: #0c1839;
    --light_blue: #6ba7db;
    
    --font_title: 'Great Vibes', cursive;
    --font_text: 'Comfortaa', cursive;
  }
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button{
    cursor: pointer;
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
  }
`;
