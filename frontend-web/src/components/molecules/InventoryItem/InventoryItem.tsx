import { Image } from '@/components/atoms/Image/Image';
import Thing from '@/components/molecules/Thing/Thing';
import * as S from './InventoryItem.styles';

type InventoryItemProps = {
  price: number;
  isOwned: boolean;
  imagePath: string;
  onClick: () => void;
  $isRoom: 'Y' | 'N';
};

const InventoryItem: React.FC<InventoryItemProps> = ({
  price,
  isOwned,
  imagePath,
  onClick,
  $isRoom
}) => {
  return (
    <S.InventoryItemContainer $isOwned={isOwned} onClick={onClick} $isRoom={$isRoom}>
      <S.ContentWrapper $isOwned={isOwned}>
        <Image
          src={imagePath}
          $unit={'px'}
          width={80}
          height={80}
        />
      </S.ContentWrapper>
      {!isOwned && (
        <S.ThingWrapper>
          <Thing price={price} />
        </S.ThingWrapper>
      )}
    </S.InventoryItemContainer>
  );
};

export default InventoryItem;
