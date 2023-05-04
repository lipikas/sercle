import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Jost:wght@300&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        overflow-x: hidden;
    }
    body{
        font-family: 'Inter', sans-serif;
        font-size: clamp(1rem, 1.5vh, 1.2rem);
    }
    @font-face {
        font-family: 'DM Serif Display';
        src: url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap');
        font-weight: 400;
      }
      
      @font-face {
        font-family: 'Jost';
        src: url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Jost:wght@200;300&display=swap');
        font-weight: 200;
      }

      @font-face{
        font-family: 'Open Sans', sans-serif;
        src: url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@1,300&display=swap');
      }

      @font-face{
        font-family: 'Cormorant', serif;
        src: url('https://fonts.googleapis.com/css2?family=Cormorant:wght@300&display=swap');
      }
`;
