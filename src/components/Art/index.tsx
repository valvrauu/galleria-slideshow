import { ArtContext } from "../../contexts/ArtContext";
import { useArtContext } from "../../hooks";
import { ContainerProps, DetailsProps } from "../../interfaces/art";
import * as S from "./styles";

const Art = ({ children, details, withGradient, withHover }: ContainerProps) => {
    return (
        <ArtContext.Provider value={details}>
            <S.Container $withHover={withHover}>
                {withGradient && <S.Gradient />}
                {children}
            </S.Container>
        </ArtContext.Provider>
    );
};

Art.Image = () => {
    const details = useArtContext();
    return (
        <S.Image
            src={details.images.thumbnail}
            alt={details.artist.name}
            loading="lazy"
        />
    );
}

Art.Details = ({ children }: DetailsProps) => {
    return (
        <S.Details>{children}</S.Details>
    );
}

Art.Name = () => {
    const details = useArtContext();
    return (
        <S.Name>{details.name}</S.Name>
    );
}

Art.ArtistName = () => {
    const details = useArtContext();
    return (
        <S.ArtistName>{details.artist.name}</S.ArtistName>
    );
}

export default Art;
