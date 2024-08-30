import styled from "styled-components";
import { StyledContainerProps, StyledButtonProps } from "../../interfaces/art-navigation";
import { DefaultButton } from '../../components/Button/styles';
import { device } from "../../styles/breakpoints";

export const Container = styled.footer<StyledContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 1.6rem 2.4rem;
    border-top: 1px solid;
    border-image: ${({ theme, $progressBar }) =>
        `linear-gradient(
            90deg,
            ${theme.artNavigation.progressBar.color} ${`${100 / $progressBar.end * $progressBar.start}%`},
            ${theme.artNavigation.progressBar.background} 0
        ) 1`
    };

    @media ${device.tablet} {
        padding: 2.4rem 4rem;
    }
`;

export const Content = styled.div`
    display: grid;
    gap: .8rem;
`;

export const Name = styled.span`
    color: ${({ theme }) => theme.artDetails.captionBox.name.color};
    background: ${({ theme }) => theme.artDetails.captionBox.name.background};

    font-size: 1.4rem;
    font-weight: 700;

    transition-property: color, background-color;
    transition-duration: 250ms;

    @media ${device.tablet} {
        font-size: 1.8rem;
    }
`;

export const ArtistName = styled.span`
    color: ${({ theme }) => theme.artDetails.captionBox.artistName.color};
    background: ${({ theme }) => theme.artDetails.captionBox.artistName.background};

    font-size: 1rem;
    font-weight: 400;

    transition-property: color, background-color;
    transition-duration: 250ms;

    @media ${device.tablet} {
        font-size: 1.3rem;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    gap: 2.3rem;

    @media ${device.tablet} {
        gap: 4rem;
    }
`;

export const Button = styled(DefaultButton) <StyledButtonProps>`
    height: 1.6rem;
    background: transparent;

    @media ${device.tablet} {
        height: 2.4rem;
    }

    & > svg {
        height: 100%;
        aspect-ratio: 1;

        path {
            stroke: ${({ theme, $isDisabled }) =>
                $isDisabled
                    ? theme.artNavigation.icon.disabled.color
                    : theme.artNavigation.icon.color};
                        transition: stroke 250ms;
        }

        &:hover path {
            stroke: #A8A8A8;
        }
    }
`;
