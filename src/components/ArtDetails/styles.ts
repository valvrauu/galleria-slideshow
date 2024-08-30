import styled from "styled-components";
import { SecondaryLink } from "../Link/styles";
import { PrimaryButtonWithIcon } from "../Button/styles";
import { device } from "../../styles/breakpoints";

export const Container = styled.article`
    display: grid;
    gap: 4.4rem;

    padding: 2.4rem 2.4rem 9.5rem;
    max-width: 37.5rem;
    overflow: hidden;

    @media ${device.tablet} {
        padding: 4rem 4rem 5.2rem;
        min-width: 76.8rem;
        gap: 6.4rem;
    }

    @media ${device.laptopL} {
        grid-template-columns: 1.8fr 1fr;
        gap: 3rem;

        padding: 10rem 4rem 7.5rem;
        min-width: 100%;
    }
`;

export const FigureBox = styled.figure`
    position: relative;

    @media ${device.laptopL} {
        display: grid;
        align-items: flex-start;
    }
`;

export const PictureBox = styled.picture`
    position: relative;

    outline: 2px solid ${({ theme }) => theme.artDetails.outline};
    outline-offset: -2px;
    margin-bottom: 5.4rem;
    min-width: 25rem;

    @media ${device.tablet} {
        margin-bottom: 0;
        width: 47.5rem;
    }

    @media ${device.laptopL} {
        margin-bottom: 6.4rem;
        grid-area: 1 / 1;
    }
`;

export const ViewButton = styled(PrimaryButtonWithIcon)`
    position: absolute;
    inset: 1.6rem auto auto 1.6rem;

    color: #FFF;
    background: #000000BF;

    &:hover {
        background: #FFFFFF40;
    }

    @media ${device.tablet} {
        inset: auto auto 1.6rem 1.6rem;
    }
`;

export const Picture = styled.img`
    width: 100%;
    image-rendering: pixelated;
`;

export const CaptionBox = styled.figcaption`
    display: grid;
    gap: .8rem;

    position: absolute;
    bottom: 0;

    padding: 2.4rem;
    width: min(28rem, 90%);
    box-sizing: border-box;

    background: ${({ theme }) => theme.artDetails.captionBox.background};
    transition: background-color 250ms;

    @media ${device.tablet} {
        gap: 2.4rem;
        inset: -2px 0 auto auto;

        width: 44.5rem;
        padding: 0 0 6.7rem 6.5rem;
    }

    @media ${device.laptopL} {
        grid-area: 1 / 1;

        position: static;
        z-index: 1;
        margin-left: auto;
    }
`;

export const Name = styled.h2`
    color: ${({ theme }) => theme.artDetails.captionBox.name.color};
    background: ${({ theme }) => theme.artDetails.captionBox.name.background};

    font-size: 2.4rem;
    font-weight: 700;
    line-height: 2.9rem;

    transition-property: color, background-color;
    transition-duration: 250ms;

    @media ${device.tablet} {
        font-size: 5.6rem;
        line-height: 6.4rem;
        white-space: pre-line;
    }
`;

export const ArtistName = styled.h3`
    color: ${({ theme }) => theme.artDetails.captionBox.artistName.color};
    background: ${({ theme }) => theme.artDetails.captionBox.artistName.background};

    transition-property: color, background-color;
    transition-duration: 250ms;

    font-size: 1.5rem;
    font-weight: 400;
`;

export const ArtistPicture = styled(Picture)`
    position: absolute;
    bottom: 0;

    outline: 2px solid ${({ theme }) => theme.artDetails.outline};
    max-width: 6.4rem;

    transform: translate(1.6rem, 100%);

    @media ${device.tablet} {
        max-width: 12.8rem;
        transform: translate(26.2rem, 100%);
    }

    @media ${device.laptopL} {
        transform: translate(3rem, 0);
    }
`;

export const ContentBox = styled.div`
    display: grid;
    gap: .7rem;

    background: ${({ theme }) => theme.artDetails.contentBox.background};
    transition: background-color 250ms;

    @media ${device.tablet} {
        position: relative;
        gap: 4rem;

        padding: 7.5rem 0 0 11.5rem;
        max-width: 57.2rem;
    }

    @media ${device.laptopL} {
        padding: 11.5rem 12.5rem 5.2rem 0;

        & > ${SecondaryLink} {
            align-self: flex-end;
        }
    }
`;

export const Year = styled.span`
    justify-self: flex-end;

    color: ${({ theme }) => theme.artDetails.contentBox.year.color};
    background: ${({ theme }) => theme.artDetails.contentBox.year.background};

    font-size: 10rem;
    font-weight: 700;
    line-height: 10rem;

    transition-property: color, background-color;
    transition-duration: 250ms;

    @media ${device.tablet} {
        position: absolute;
        left: 0;

        font-size: 20rem;
        line-height: 15rem;
    }
`;

export const Description = styled.p`
    position: relative;
    top: -3.2rem;

    color: ${({ theme }) => theme.artDetails.contentBox.description.color};
    background: ${({ theme }) => theme.artDetails.contentBox.description.background};

    transition-property: color, background-color;
    transition-duration: 250ms;

    font-size: 1.4rem;
    font-weight: 700;
    line-height: 2.8rem;

    @media ${device.tablet} {
        top: 0;
    }

    @media ${device.laptopL} {
        max-width: 35rem;
    }
`;
