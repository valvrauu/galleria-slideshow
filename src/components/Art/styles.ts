import styled, { css } from "styled-components";
import { StyledContainerProps } from "../../interfaces/art";

export const Container = styled.figure<StyledContainerProps>`
    position: relative;
    max-width: max-content;
    min-width: 25rem;
    outline: 2px solid ${({ theme }) => theme.art.outline};

    ${({ $withHover }) => $withHover && css`
        &::after {
            content: '';

            position: absolute;
            inset: 0;

            transition: all 250ms;
            background: transparent;
        }

        &:hover::after {
            background: ${({ theme }) => theme.art.hover.background}
        }
    `}

    img + figcaption { 
        position: absolute;
        bottom: 0;
    }
`;

export const Gradient = styled.div`
    position: absolute;
    inset: auto 0 0;
    z-index: 1;

    height: 17rem;

    background: linear-gradient(transparent, rgba(0, 0, 0, .84));
`;

export const Image = styled.img`
    width: 100%;
    height: 100%;
    image-rendering: pixelated;
`;

export const Details = styled.figcaption`
    z-index: 2;

    display: grid;
    gap: .7rem;

    max-width: 24.6rem;
    padding: 3.2rem;
    box-sizing: content-box;
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.art.name.color};
    background: ${({ theme }) => theme.art.name.background};

    font-size: 2.4rem;
    font-weight: 700;
    white-space: pre-line;
`;

export const ArtistName = styled.h3`
    color: ${({ theme }) => theme.art.artistName.color};
    background: ${({ theme }) => theme.art.artistName.background};

    font-size: 1.3rem;
    font-weight: 400;
`;
