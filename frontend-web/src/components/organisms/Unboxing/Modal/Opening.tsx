import Button from '@/components/atoms/Button/Button';
import { Image } from '@/components/atoms/Image/Image';
import { Text } from '@/components/atoms/Text/Text.styles';
import { modalContentAtom } from '@/states/modalStates';
import { useAtom } from 'jotai';

const Opening = () => {
  const [, setModalContent] = useAtom(modalContentAtom);

  const handleConfirm = () => {
    setModalContent('complete');
  };

  return (
    <>
        <Image
          src={require(`@/assets/images/inventory/gift.png`).default}
          $unit={'px'}
          height={250}
        />
        <Text size="body1" fontWeight="bold" $marginBottom='25px' $lineHeight='1.4'>
          좋아요! 선물상자를 흔들어서
          <br />
          어떤 오브제가
          <br />
          도착했는지 확인해 볼까요?
        </Text>
        <Text size="body3" fontWeight="bold" color='grey2' onClick={handleConfirm}>
          기기를 신나게 흔들어주세요~!
        </Text>
    </>
  );
};

export default Opening;
