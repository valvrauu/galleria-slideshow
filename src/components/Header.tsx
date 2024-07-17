import { device } from "../styles/breakpoints";
import styled from "styled-components";

const Header = styled.header`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    padding: 2.4rem 2.4rem 2.3rem;
    border-bottom: 1px solid #E5E5E5;

    @media ${device.tablet} {
        padding: 2.9rem 4rem 2.7rem;
    }

    @media ${device.laptopL} {
        padding: 4rem;
    }
`;

export default Header;
