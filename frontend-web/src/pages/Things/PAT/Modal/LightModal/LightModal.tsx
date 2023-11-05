import { Image } from '@/components/atoms/Image/Image';
import Header from '@/components/molecules/Header/Header';
import Modal from '@/components/molecules/Modal/Modal';
import { ThingsModalProps } from '@/types/things';
import { changeModalOpen } from '@/utils/changeModalOpen';
import * as S from '@/pages/Things/PAT/Modal/LightModal/LightModal.styles';
import { IMAGES } from '@/constants/images';

const LightModal = ({ modalOpen, setModalOpen }: ThingsModalProps) => {
  return (
    <Modal
      isOpen={modalOpen}
      onClose={() => changeModalOpen(modalOpen, setModalOpen)}
    >
      <Header text="스위치 봇 스마트 컬러 전구">
        <Image
          src={IMAGES.MODAL.CLOSE_ICON}
          width={1.5}
          height={1.5}
          onClick={() => changeModalOpen(modalOpen, setModalOpen)}
        />
      </Header>
    </Modal>
  );
};

export { LightModal };
