import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --font-icon: 3.5rem;
    --font-primary: 6.5rem;
    --font-secondary: 1.8rem;
    --font-tertiary: 1.6rem;

    --banner-font: 1.8rem;

    --primary-header-font: 4rem;
    --secondary-header-font: 3rem;

    --font-base: 1.6rem;
    --font-button: 2rem;


    --bg-primary: #07332F;
    --text-white: #F3F3F3;
    --text-secodary-white: #FFF;

    --bg-button: #F7A582;
    

}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: "Poppins", sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}


@media (max-width: 768px) {
  :root {
    --font-primary: 3rem;
    --font-tertiary: 1.4rem;
    --banner-font: 1.4rem;
    --primary-header-font: 4rem;
  }
}

`;
