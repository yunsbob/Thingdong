import * as S from '@/pages/Inventory/Modal/PurchaseCheckModal.styles';
import Modal, { ModalProps } from '@/components/molecules/Modal/Modal';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Image } from '@/components/atoms/Image/Image';
import Button from '@/components/atoms/Button/Button';
import {
  deleteItemAtom,
  deleteModalOpenAtom,
  selectedItemAtom,
} from '@/states/inventoryModalStates';
import { useAtom } from 'jotai';

const DeleteObject = () => {
  const [modalOpen, setModalOpen] = useAtom(deleteModalOpenAtom);
  const [selectedItem, setSelectedItem] = useAtom(deleteItemAtom);

  const onModalClose = () => {
    setModalOpen(false);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  return (
    <Modal height={19.6} onClose={onModalClose} isOpen={modalOpen}>
      <Text size="body3" fontWeight="extraBold">
        선택하신 오브제를 삭제하시겠어요?
      </Text>
      <S.ItemWrapper>
        <Image src={selectedItem?.objectImagePath} $unit={'px'} height={100} />
      </S.ItemWrapper>
      <Text size="body3" fontWeight="bold">
        {selectedItem?.objectName}
      </Text>
      <S.ButtonWrapper>
        <Button option={'ghost'} size={'small'} onClick={handleCancel}>
          취소
        </Button>
        <Button option={'activated'} size={'small'}>
          확인
        </Button>
      </S.ButtonWrapper>
    </Modal>
  );
};

export default DeleteObject;
