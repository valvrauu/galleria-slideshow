import { createContext } from 'react';
import { ArtProps } from '../interfaces/art-props';

export const ArtContext = createContext<ArtProps | undefined>(undefined);
