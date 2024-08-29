import styled from "styled-components";
import { DefaultLink } from "../../components/Link/styles";
import { device } from "../../styles/breakpoints";

export const Main = styled.main`
    display: flex;
    justify-content: center;
`;

export const Container = styled.section`
    display: grid;
    gap: 2.4rem;

    padding: 2.4rem;
    overflow: hidden;

    @media ${device.tablet} {
        grid: repeat(564, 5px) / repeat(2, 1fr);
        gap: 0 4rem;

        padding: 4rem;
    }

    @media ${device.laptopL} {
        grid: repeat(278, 5px) / repeat(4, 1fr);
    }
`;

export const Item = styled.div`
    display: grid;
    max-width: max-content;

    @media ${device.tablet} {
        &:nth-child(1) { grid-row: 1 / 51; }
        &:nth-child(2) { grid-row: 1 / 81; }
        &:nth-child(3) { grid-row: 59 / 116; }
        &:nth-child(4) { grid-row: 89 / 139; }
        &:nth-child(5) { grid-row: 124 / 192; }
        &:nth-child(6) { grid-row: 147 / 203; }
        &:nth-child(7) { grid-row: 200 / 300; }
        &:nth-child(8) { grid-row: 211 / 261; }
        &:nth-child(9) { grid-row: 308 / 392; } 
        &:nth-child(10) { grid-row: 269 / 321; }
        &:nth-child(11) { grid-area: 329 / 2 / 415; }
        &:nth-child(12) { grid-row: 400 / 452; }
        &:nth-child(13) { grid-row: 423 / 489; }
        &:nth-child(14) { grid-row: 460 / 565; }
        &:nth-child(15) { grid-row: 497 / 565; }
    }

    @media ${device.laptopL} {
        &:nth-child(3) { grid-row: 1 / 58; }
        &:nth-child(4) { grid-row: 1 / 51; }
        &:nth-child(5) { grid-row: 59 / 127; }
        &:nth-child(6) { grid-row: 89 / 145; }
        &:nth-child(7) { grid-row: 66 / 166; }
        &:nth-child(8) { grid-row: 59 / 109; }
        &:nth-child(9) { grid-row: 135 / 219; } 
        &:nth-child(10) { grid-row: 153 / 205; }
        &:nth-child(11) { grid-area: 117 / 4 / 203; }
        &:nth-child(12) { grid-row: 227 / 279; }
        &:nth-child(13) { grid-row: 213 / 279; }
        &:nth-child(14) { grid-row: 174 / 279; }
        &:nth-child(15) { grid-row: 211 / 279; }
    }
`;

export const Link = styled(DefaultLink)`
    display: contents;
`;
