import { device } from '../styles/breakpoints';
import styled from 'styled-components';
import SVG from 'react-inlinesvg';

const StyledSVG = styled(SVG)`
    flex-shrink: 0;
    height: 3.2rem;

    fill: ${({ theme }) => theme.logo.text};
    background: ${({ theme }) => theme.logo.background};

    @media ${device.laptopL} {
        height: 4.8rem;
    }
`;

function Logo() {
    return (
        <StyledSVG
            src='/images/shared/logo.svg'
            title="Galleria."
        />
    );
}

export default Logo;
