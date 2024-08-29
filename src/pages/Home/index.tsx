import { v4 as uuidv4 } from "uuid";
import urlSlug from "../../utils/urlSlug";
import data from "../../data/data.json";
import Art from "../../components/Art";
import * as S from './styles';

const Home = () => {
    return (
        <S.Main>
            <S.Container>
                {data.map(art => (
                    <S.Item key={uuidv4()}>
                        <S.Link to={`/details/${urlSlug(art.name)}`}>
                            <Art
                                details={art}
                                withGradient
                                withHover
                            >
                                <Art.Image />
                                <Art.Details>
                                    <Art.Name />
                                    <Art.ArtistName />
                                </Art.Details>
                            </Art>
                        </S.Link>
                    </S.Item>
                ))}
            </S.Container>
        </S.Main>
    );
};

export default Home;
