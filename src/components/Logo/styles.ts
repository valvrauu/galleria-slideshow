import styled from 'styled-components';
import LogoIcon from '../../icons/logo.svg?react';
import { device } from '../../styles/breakpoints';

export const Logo = styled(LogoIcon)`
    flex-shrink: 0;
    height: 3.2rem;

    fill: ${({ theme }) => theme.logo.text};
    background: ${({ theme }) => theme.logo.background};

    transition-property: fill, background-color;
    transition-duration: 250ms;

    @media ${device.laptopL} {
        height: 4.8rem;
    }
`;
