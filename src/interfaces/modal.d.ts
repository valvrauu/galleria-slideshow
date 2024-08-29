import { ReactNode } from "react";

export interface ContainerProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}
