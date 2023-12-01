import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --font-icon: 3.5rem;
    --font-logo-title: var(--font-icon);
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
    --text-white-opac: rgba(255, 255, 255,.3);
    --text-secodary-white: #FFF;
    --text-dark: #0A0808;
    --text-secondary-dark: #3B3A3A;
    --text-gray-primary: #6C6B6B;

    --bg-button: #F7A582;

    --controlled-width: 80%;
    --controlled-padding:0 0 13rem 0;
    --secondary-controlled-padding: 13rem 0;
    --border-radius: 1rem;

    --card-shadow:1px 0px 31px -1px rgba(0,0,0,0.63);;
    

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
  font-family: 'Source Sans 3', sans-serif;
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.6rem;
}


@media (max-width: 768px) {
  :root {
    --font-logo-title: 2rem;
    --font-primary: 3rem;
    --font-tertiary: 1.4rem;
    --banner-font: 1.4rem;
    --primary-header-font: 3rem;
    --controlled-width: 95%;
    --controlled-padding:0 0 3.2rem 0;
  }
}
`;
