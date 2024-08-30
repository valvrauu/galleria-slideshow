import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import data from "../../data/data.json";
import urlSlug from "../../utils/urlSlug";
import { ArtProps } from '../../interfaces/art-props';
import ArtDetails from '../../components/ArtDetails';
import ArtNavigation from '../../components/ArtNavigation';
import * as S from './styles';

const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const [nextArt, setNextArt] = useState<string>('');
    const [backArt, setBackArt] = useState<string>('');
    const [art, setArt] = useState<ArtProps>();
    const [artIdx, setArtIdx] = useState<number>(0)

    useEffect(() => {
        data.find((art, idx) => {
            if (urlSlug(art.name) === name) {
                const next = data[idx + 1]?.name;
                const back = data[idx - 1]?.name;

                setNextArt(next);
                setBackArt(back);
                setArt(art);
                setArtIdx(idx);
            }
        });
    }, [name, navigate]);

    if (!art) return null;

    const handleBack = () => {
        if (backArt) navigate(`/details/${urlSlug(backArt)}`);
    }

    const handleNext = () => {
        if (nextArt) navigate(`/details/${urlSlug(nextArt)}`);
    }

    return (
        <>
            <S.Main>
                <ArtDetails details={art}>
                    <ArtDetails.FigureBox>
                        <ArtDetails.Picture withView />
                        <ArtDetails.CaptionBox>
                            <ArtDetails.Name />
                            <ArtDetails.ArtistName />
                            <ArtDetails.ArtistPicture />
                        </ArtDetails.CaptionBox>
                    </ArtDetails.FigureBox>
                    <ArtDetails.ContentBox>
                        <ArtDetails.Year />
                        <ArtDetails.Description />
                        <ArtDetails.Source />
                    </ArtDetails.ContentBox>
                </ArtDetails>
            </S.Main>
            <ArtNavigation
                art={art}
                progressBar={{ start: artIdx + 1, end: data.length }}
                onBack={handleBack}
                onNext={handleNext}
                isBackCancel={artIdx <= 0}
                isNextCancel={artIdx >= data.length - 1}
            />
        </>
    );
};

export default Details;
