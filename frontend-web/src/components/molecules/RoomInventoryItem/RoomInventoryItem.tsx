import { Image } from '@/components/atoms/Image/Image';
import * as S from '@/components/molecules/InventoryItem/InventoryItem.styles';

type RoomInventoryItemProps = {
  isOwned: boolean;
  imagePath: string;
  onClick?: () => void;
  $isRoom: 'Y' | 'N';
};

const RoomInventoryItem: React.FC<RoomInventoryItemProps> = ({
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
    </S.InventoryItemContainer>
  );
};

export default RoomInventoryItem;
