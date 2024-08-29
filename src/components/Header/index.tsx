import { useLocation, matchPath } from 'react-router-dom';
import DarkModeSwitch from '../DarkModeSwitch';
import Logo from '../Logo';
import { PrimaryLink } from '../Link/styles';
import * as S from './styles';

const Header = () => {
    const location = useLocation();
    const isDetailsPage = matchPath('/details/:name', location.pathname);

    const linkTo = isDetailsPage ? '/' : '/details/starry-night';
    const linkText = isDetailsPage ? 'Stop Slideshow' : 'Start Slideshow';

    return (
        <S.Container>
            <S.Content>
                <S.Link to="/">
                    <Logo />
                </S.Link>

                <PrimaryLink
                    to={linkTo}
                    transform='upperCase'
                >
                    {linkText}
                </PrimaryLink>
            </S.Content>
            <DarkModeSwitch />
        </S.Container>
    );
}

export default Header;
