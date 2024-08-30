import styled from "styled-components";
import { DefaultProps } from '../../interfaces/button';

export const DefaultButton = styled.button <DefaultProps>`
    border: none;

    font-family: inherit;
    text-transform: ${({ transform }) => transform ?? 'none'};

    cursor: pointer;

    transition-property: color, background-color;
    transition-duration: 250ms;
`;

export const PrimaryButton = styled(DefaultButton)`
    padding: 1.4rem 1.6rem;

    font-size: 1rem;
    font-weight: 700;
    letter-spacing: .215em;
`;

export const PrimaryButtonWithIcon = styled(PrimaryButton)`
    display: flex;
    gap: 1.4rem;
`;

export const SecondaryButton = styled(DefaultButton)`
    font-size: 1.4rem;
    font-weight: 700;
    letter-spacing: .3em;
`;
