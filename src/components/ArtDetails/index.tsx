import { useState } from 'react';
import { ArtContext } from '../../contexts/ArtContext';
import { useArtContext } from '../../hooks';
import { ContainerProps, FigureProps, PictureProps, CaptionProps, ContentProps } from '../../interfaces/art-details';
import ViewIcon from '../../icons/icon-view-image.svg?react';
import Modal from '../Modal';
import { SecondaryLink } from '../Link/styles';
import * as S from './styles';

const ArtDetails = ({ children, details }: ContainerProps) => {
    return (
        <ArtContext.Provider value={details}>
            <S.Container>
                {children}
            </S.Container>
        </ArtContext.Provider>
    );
};

ArtDetails.FigureBox = ({ children }: FigureProps) => {
    return (
        <S.FigureBox>{children}</S.FigureBox>
    );
}

ArtDetails.Picture = ({ withView }: PictureProps) => {
    const details = useArtContext();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <S.PictureBox>
                {withView && (
                    <S.ViewButton
                        onClick={() => setIsOpen(true)}
                        transform='uppercase'
                    >
                        <ViewIcon />
                        View Image
                    </S.ViewButton>
                )}

                <S.Picture
                    srcSet={details.images.hero.large}
                    media='(min-width: 768px)'
                    as='source'
                />
                <S.Picture
                    src={details.images.hero.small}
                    alt={details.artist.name}
                />
            </S.PictureBox>
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <S.Picture
                    src={details.images.gallery}
                    alt={details.artist.name}
                />
            </Modal>
        </>
    );
}

ArtDetails.CaptionBox = ({ children }: CaptionProps) => {
    return (
        <S.CaptionBox>{children}</S.CaptionBox>
    );
}

ArtDetails.Name = () => {
    const details = useArtContext();
    return (
        <S.Name>{details.name}</S.Name>
    );
}

ArtDetails.ArtistName = () => {
    const details = useArtContext();
    return (
        <S.ArtistName>{details.artist.name}</S.ArtistName>
    );
}

ArtDetails.ArtistPicture = () => {
    const details = useArtContext();
    return (
        <S.ArtistPicture
            src={details.artist.image}
            alt={details.artist.name}
        />
    );
}

ArtDetails.ContentBox = ({ children }: ContentProps) => {
    return (
        <S.ContentBox>{children}</S.ContentBox>
    );
}

ArtDetails.Year = () => {
    const details = useArtContext();
    return (
        <S.Year>{details.year}</S.Year>
    );
}

ArtDetails.Description = () => {
    const details = useArtContext();
    return (
        <S.Description>{details.description}</S.Description>
    );
}

ArtDetails.Source = () => {
    const details = useArtContext();
    return (
        <SecondaryLink
            to={`${details.source}`}
            target='_blank'
            transform='uppercase'
        >
            Go to source
        </SecondaryLink>
    );
}

export default ArtDetails;
