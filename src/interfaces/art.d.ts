import { ReactNode } from "react";
import { ArtProps } from "./art-props";

export interface ContainerProps {
    children: ReactNode;
    details: ArtProps;
    withGradient?: boolean;
    withHover?: boolean;
}

export interface StyledContainerProps {
    $withHover?: boolean;
}

export interface DetailsProps {
    children: ReactNode;
}
