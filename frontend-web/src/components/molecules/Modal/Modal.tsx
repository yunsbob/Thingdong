import { ReactNode } from 'react';
import * as S from './Modal.styles';
import ModalPortal from '@/components/molecules/ModalPortal/ModalPortal';

export interface ModalProps extends S.ModalStyleProps {
  children: ReactNode;
  onClose?: () => void;
  isOpen: boolean;
  className?: string;
}

const Modal = ({
  width = 21,
  $padding = '2.25rem',
  $borderRadius = 16,
  $unit = 'rem',
  onClose,
  isOpen,
  className,
  children,
}: ModalProps) => {
  return (
    <>
      {isOpen && (
        <ModalPortal>
          <S.ModalWrapper>
            <S.ModalBackground onClick={onClose} />
            <S.ModalContainer
              className={className}
              width={width}
              height="auto"
              $borderRadius={$borderRadius}
              $padding={$padding}
              $unit={$unit}
              // onClick={(e: any) => {
              //   e.stopPropagation();
              //   console.log('????')
              // }}
            >
              {children}
            </S.ModalContainer>
            {/* <div
              onClick={onClose}
              style={{
                height: '30%',
                width: '100%',
                position: 'absolute',
                bottom: '0%',
                translate: 'transformY(100%)',
              }}
            ></div> */}
          </S.ModalWrapper>
        </ModalPortal>
      )}
    </>
  );
};

export default Modal;
