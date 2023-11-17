import { Image } from '@/components/atoms/Image/Image';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';
import { useAtom } from 'jotai';
import { modalContentAtom, modalOpenAtom } from '@/states/unboxingModalStates';
import TextTyping from './Modal/TextTyping';
import Opening from './Modal/Opening';
import Complete from './Modal/Complete';
import SendingList from './Modal/SendingList';
import Check from './Modal/Check';
import { UnboxingProps } from '@/types/inventory';
import { IMAGES } from '@/constants/images';
import { UNBOXING_MODAL_NAME } from '@/constants/unboxing';

const Unboxing = ({ unBoxThingList }: UnboxingProps) => {
  const [, setModalOpen] = useAtom(modalOpenAtom);
  const [modalContent] = useAtom(modalContentAtom);

  const handleItemClick = () => {
    setModalOpen(true);
  };

  const renderModalContent = () => {
    switch (modalContent) {
      case UNBOXING_MODAL_NAME.TEXT_TYPING:
        return <TextTyping />;
      case UNBOXING_MODAL_NAME.OPENING:
        return <Opening />;
      case UNBOXING_MODAL_NAME.COMPLETE:
        return <Complete />;
      case UNBOXING_MODAL_NAME.SENDING_LIST:
        return <SendingList />;
      case UNBOXING_MODAL_NAME.CHECK:
        return <Check />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderModalContent()}
      <Image
        src={IMAGES.INVENTORY.UNBOXING_ENTER_IMAGE}
        $unit={'%'}
        width={100}
        onClick={handleItemClick}
      />
      <UnboxingItem unBoxThingList={unBoxThingList} />
    </>
  );
};

export default Unboxing;
