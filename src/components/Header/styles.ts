import styled from "styled-components";
import { DefaultLink } from "../Link/styles";
import { device } from "../../styles/breakpoints";

export const Container = styled.header`
    display: grid;
    gap: 2rem;

    min-width: 29.8rem;
    padding: 2.4rem 2.4rem 0;

    @media ${device.tablet} {
        padding: 2.9rem 4rem 0;
    }

    @media ${device.laptopL} {
        padding: 4rem 0 0;
        margin: 0 4rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding-bottom: 2.3rem;
    border-bottom: 1px solid ${({ theme }) => theme.header.border.bottom};

    transition-property: border-bottom;
    transition-duration: 250ms;

    @media ${device.tablet} {
        padding-bottom: 2.7rem;
    }

    @media ${device.laptopL} {
        padding-bottom: 4rem;
    }
`;

export const Link = styled(DefaultLink)`
    display: grid;
`;
