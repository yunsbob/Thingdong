import { Image } from '@/components/atoms/Image/Image';
import Thing from '@/components/molecules/Thing/Thing';
import * as S from './InventoryItem.styles';

type InventoryItemProps = {
  price: string;
  isOwned: boolean;
  imagePath: string;
};

const InventoryItem: React.FC<InventoryItemProps> = ({
  price,
  isOwned,
  imagePath,
}) => {
  return (
    <S.InventoryItemContainer $isOwned={isOwned}>
      <Image
        src={require('@/assets/images/friend/' + imagePath).default}
        $unit={'px'}
        width={80}
        height={80}
      />
      {!isOwned && (
        <S.ThingWrapper>
          <Thing price={price} />
        </S.ThingWrapper>
      )}
    </S.InventoryItemContainer>
  );
};

export default InventoryItem;
