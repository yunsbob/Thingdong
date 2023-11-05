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


const Unboxing = ({unBoxThingList}: UnboxingProps) => {
  const [, setModalOpen] = useAtom(modalOpenAtom);
  const [modalContent] = useAtom(modalContentAtom);

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
      case 'sendingList':
        return <SendingList />;
      case 'check':
        return <Check />;
      default:
        return null;
    }
  };

  return (
    <>
      {renderModalContent()}
      <Image
        src={require('@/assets/images/inventory/unboxing_enter.png').default}
        $unit={'%'}
        width={100}
        onClick={handleItemClick}
      />
      <UnboxingItem unBoxThingList={unBoxThingList} />
    </>
  );
};

export default Unboxing;
