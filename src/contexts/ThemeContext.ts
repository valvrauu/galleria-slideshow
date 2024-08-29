import { createContext } from "react";
import { ContextProps } from "../interfaces/theme";

export const ThemeContext = createContext<ContextProps | undefined>(undefined);
