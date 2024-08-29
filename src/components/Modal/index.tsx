import { useEffect } from "react";
import { ContainerProps } from "../../interfaces/modal";
import * as S from './styles';

const Modal = ({ children, isOpen, onClose }: ContainerProps) => {
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : 'visible';

        return () => {
            document.body.style.overflow = 'visible';
        }
    }, [isOpen]);

    return (
        <>
            {isOpen && (
                <S.OverlayBox>
                    <S.ModalBox>
                        <S.CloseButton
                            onClick={onClose}
                            transform="uppercase"
                        >
                            Close
                        </S.CloseButton>
                        <S.Content>
                            {children}
                        </S.Content>
                    </S.ModalBox>
                </S.OverlayBox>
            )}
        </>
    );
};

export default Modal;
