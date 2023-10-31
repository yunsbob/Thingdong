import { Image } from '@/components/atoms/Image/Image';
import UnboxingItem from '@/components/molecules/UnboxingItem/UnboxingItem';

const Unboxing = () => {
  return (
    <>
      <Image
        src={require('@/assets/images/inventory/unboxing_enter.png').default}
        $unit={'%'}
        width={100}
      />
      <UnboxingItem />
    </>
  );
};

export default Unboxing;
