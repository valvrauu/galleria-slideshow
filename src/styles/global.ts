import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        display: flex;
        justify-content: center;

        min-height: 100vh;
        min-height: 100dvh;

        color: ${({ theme }) => theme.text};
        background: ${({ theme }) => theme.background};;

        font-family: "Libre Baskerville", serif;
        font-size: 1.4rem;

        transition-property: color, background-color;
        transition-duration: ${({ theme }) => theme.isChanged ? '250ms' : '0ms'};

        &::-webkit-scrollbar {
            width: 1.375rem;
        }

        &::-webkit-scrollbar-track {
            background: ${({ theme }) => theme.scrollbar.track.background};
        }

        &::-webkit-scrollbar-thumb {
            background: ${({ theme }) => theme.scrollbar.thumb.background};
        }
    }

    #root {
        width: min(144rem, 100%);
        overflow: hidden;
    }

    img,
    picture {
        max-width: 100%;
        display: block;
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-motion: reduce) {
        html:focus-within {
            scroll-behavior: auto;
        }

        *,
        *::before,
        *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
