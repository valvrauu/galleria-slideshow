import { ReactNode } from "react";
import { DefaultTheme } from "styled-components";

export interface ContextProps {
    theme: DefaultTheme;
    toggleTheme: (selectedTheme: DefaultTheme) => void;
}

export interface ProviderProps {
    children: ReactNode;
}
