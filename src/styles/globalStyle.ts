import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        list-style-type: none;
    }

    html{
        width: 100vw;
        height: 100vh;
    }
    :root{
        --color-bg-primary: linear-gradient(259.95deg, #41B5D9 2.25%, #5F41D9 100.27%);
        --color-bg-secondary: #ffffff;
        --color-bg-button: #00E1E7;

        --font-color-1: #FFFFFF;
        --font-color-2: #5F41D9;
        --font-color-3: #432E98;
        --font-color-4: #130C25;
        --font-color-5: #423D51;

        --font-inter: 'Inter', sans-serif;
        --font-degular: 'Work Sans', sans-serif;

        --font-weight-1: 400;
        --font-weight-2: 500;
        --font-weight-3: 600;

        --font-size-1: 0.9375rem;
        --font-size-2: 1.1rem;
        --font-size-3: 1.25rem;
        --font-size-4: 2rem;
        --font-size-5: 2.75rem;
    }
`