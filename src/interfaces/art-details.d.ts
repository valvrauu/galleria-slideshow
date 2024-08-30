import { ReactNode } from "react";
import { ArtProps } from "./art-props";

export interface ContainerProps {
    children: ReactNode;
    details: ArtProps;
}

export interface FigureProps {
    children: ReactNode;
}

export interface PictureProps {
    withView: boolean;
}

export interface CaptionProps {
    children: ReactNode;
}

export interface ContentProps {
    children: ReactNode;
}
