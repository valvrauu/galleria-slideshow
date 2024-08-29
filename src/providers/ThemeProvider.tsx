import { DefaultTheme, ThemeProvider as StyledThemeProvider } from "styled-components";
import { useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { usePersistedState } from "../hooks";
import { ProviderProps } from "../interfaces/theme";
import light from "../styles/themes/light";

export const ThemeProvider = ({ children }: ProviderProps) => {
    const [theme, setTheme] = usePersistedState('theme', light);
    const [isChanged, setIsChanged] = useState(false);

    const toggleTheme = (selectedTheme: DefaultTheme) => {
        setTheme(selectedTheme);
        setIsChanged(true);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <StyledThemeProvider theme={{ ...theme, isChanged }}>
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};
