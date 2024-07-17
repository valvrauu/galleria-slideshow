import { device } from "../styles/breakpoints";
import styled from "styled-components"
import { Link } from "react-router-dom";

export const PrimaryLink = styled(Link)`
    color: ${({ theme }) => theme.link.primary.color};
    background: ${({ theme }) => theme.link.primary.background};

    font-size: .9rem;
    font-weight: 700;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 1.93px;

    cursor: pointer;
    transition: all 250ms;

    &:hover {
        color: ${({ theme }) => theme.link.primary.hover.color};
        background: ${({ theme }) => theme.link.primary.hover.background};
    }

    @media ${device.tablet} {
        font-size: 1.2rem;
        letter-spacing: 2.57px;
    }
`;
