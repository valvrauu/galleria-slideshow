import { useThemeContext } from '../../hooks';
import lightTheme from '../../styles/themes/light';
import darkTheme from '../../styles/themes/dark';
import * as S from './styles';

const DarkModeSwitch = () => {
    const { theme, toggleTheme } = useThemeContext();
    const isDarkTheme = theme.title === 'dark';

    const handleTheme = () => {
        toggleTheme(isDarkTheme ? lightTheme : darkTheme);
    };

    return (
        <S.DarkModeSwitch
            sunColor="#FFF"
            moonColor="#000"
            checked={!isDarkTheme}
            onChange={handleTheme}
        />
    );
};

export default DarkModeSwitch;
