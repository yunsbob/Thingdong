import { Image } from '@/components/atoms/Image/Image';
import Modal from '@/components/molecules/Modal/Modal';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';
import { useState } from 'react';
import { useAtom } from 'jotai';
import { modalContentAtom, modalOpenAtom } from '@/states/modalStates';
import TextTyping from './Modal/TextTyping';
import Opening from './Modal/Opening';
import Complete from './Modal/Complete';
import FriendList from './Modal/FriendList';
import Check from './Modal/Check';

const Unboxing = () => {
  const [modalOpen, setModalOpen] = useAtom(modalOpenAtom);
  const [modalContent] = useAtom(modalContentAtom);

  const onModalClose = () => {
    setModalOpen(false);
  };
  const handleItemClick = () => {
    setModalOpen(true);
  };
  const renderModalContent = () => {
    switch (modalContent) {
      case 'textTyping':
        return <TextTyping />;
      case 'opening':
        return <Opening />;
      case 'complete':
        return <Complete />;
      case 'friendList':
        return <FriendList />;
      case 'check':
        return <Check />;
      default:
        return null;
    }
  };

  return (
    <>
      <Modal height={31} onClose={onModalClose} isOpen={modalOpen}>
        {renderModalContent()}
      </Modal>
      <Image
        src={require('@/assets/images/inventory/unboxing_enter.png').default}
        $unit={'%'}
        width={100}
        onClick={handleItemClick}
      />
      <UnboxingItem />
    </>
  );
};

export default Unboxing;
