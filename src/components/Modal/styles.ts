import styled from "styled-components";
import { SecondaryButton } from "../Button/styles";
import { device } from "../../styles/breakpoints";

export const OverlayBox = styled.div`
    position: fixed;
    inset: 0;
    z-index: 9999;

    display: grid;
    padding: 2.4rem;

    background: #000000D9;
    overflow: auto;
`;

export const ModalBox = styled.div`
    display: grid;
    gap: 3.3rem;

    margin: auto;
    height: max-content;

    @media ${device.tablet} {
        gap: 4.1rem;
    }
`;

export const CloseButton = styled(SecondaryButton)`
    justify-self: flex-end;

    color: #FFF;
    background: transparent;

    &:hover {
        color: #FFFFFF40;
    }
`;

export const Content = styled.div`
    min-width: 25rem;
`;
