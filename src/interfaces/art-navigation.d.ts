import { ArtProps } from "./art-props";

export interface ContainerProps {
    art: ArtProps;
    progressBar: {
        start: number,
        end: number
    }
    onBack: () => void;
    onNext: () => void;
    isBackCancel: boolean;
    isNextCancel: boolean;
}

export interface StyledContainerProps {
    $progressBar: {
        start: number,
        end: number
    }
}

export interface StyledButtonProps {
    $isDisabled?: boolean;
}
