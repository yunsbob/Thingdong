import { ReactNode } from 'react';
import * as S from './Modal.styles';
import ModalPortal from '@/components/molecules/ModalPortal/ModalPortal';

interface ModalProps extends S.ModalStyleProps {
  children: ReactNode;
  onClose?: () => void;
  isOpen: boolean;
}

const Modal = ({
  width = 21,
  height,
  $borderRadius = 16,
  unit = 'rem',
  onClose,
  isOpen,
  children,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <S.ModalWrapper>
          <S.ModalBackground onClick={onClose} />
            <S.ModalContainer
              width={width}
              height={height}
              $borderRadius={$borderRadius}
              unit={unit}
              onClick={(e: any) => {
                e.stopPropagation();
              }}
            >
              {children}
            </S.ModalContainer>
          </S.ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
