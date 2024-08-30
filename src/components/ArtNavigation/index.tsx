import { ContainerProps } from '../../interfaces/art-navigation';
import IconBack from '../../icons/icon-back-button.svg?react';
import IconNext from '../../icons/icon-next-button.svg?react';
import * as S from './styles';

const ArtNavigation = ({ art, progressBar, onBack, onNext, isBackCancel, isNextCancel }: ContainerProps) => {
    return (
        <S.Container $progressBar={progressBar}>
            <S.Content>
                <S.Name>{art.name}</S.Name>
                <S.ArtistName>{art.artist.name}</S.ArtistName>
            </S.Content>
            <S.ButtonBox>
                <S.Button onClick={onBack} $isDisabled={isBackCancel}>
                    <IconBack />
                </S.Button>
                <S.Button onClick={onNext} $isDisabled={isNextCancel}>
                    <IconNext />
                </S.Button>
            </S.ButtonBox>
        </S.Container>
    );
};

export default ArtNavigation;
