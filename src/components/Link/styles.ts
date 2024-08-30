import styled from "styled-components"
import { Link } from "react-router-dom";
import { DefaultProps } from "../../interfaces/link";
import { device } from "../../styles/breakpoints";

export const DefaultLink = styled(Link) <DefaultProps>`
    text-transform: ${({ transform }) => transform ?? 'none'};
    cursor: pointer;

    transition-property: color, background-color;
    transition-duration: 250ms;
`;

export const PrimaryLink = styled(DefaultLink)`
    color: ${({ theme }) => theme.link.primary.color};
    background: ${({ theme }) => theme.link.primary.background};

    font-size: .9rem;
    font-weight: 700;
    text-decoration: none;
    letter-spacing: .214em;

    &:hover {
        color: ${({ theme }) => theme.link.primary.hover.color};
        background: ${({ theme }) => theme.link.primary.hover.background};
    }

    @media ${device.tablet} {
        font-size: 1.2rem;
    }
`;

export const SecondaryLink = styled(DefaultLink)`
    color: ${({ theme }) => theme.link.secondary.color};
    background: ${({ theme }) => theme.link.secondary.background};

    font-size: .9rem;
    font-weight: 700;
    letter-spacing: .214em;

    &:hover {
        color: ${({ theme }) => theme.link.secondary.hover.color};
        background: ${({ theme }) => theme.link.secondary.hover.background};
    }
`;
