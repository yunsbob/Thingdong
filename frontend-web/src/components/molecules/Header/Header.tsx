import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/molecules/Header/Header.styles';
import { IMAGES } from '@/constants/images';
import { useNavigate } from 'react-router-dom';
interface HeaderProps extends TextProps {
  text: string;
  hasBackButton?: boolean;
  $marginHeaderBottom?: number;
  $justifyContent?: string;
  children?: React.ReactNode;
}

const Header = ({
  text,
  hasBackButton = false,
  $marginHeaderBottom = 1.3,
  $justifyContent = 'space-between',
  children,
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer
      $marginBottom={$marginHeaderBottom}
      $justifyContent={$justifyContent}
    >
      <S.HeaderWrapper>
        {hasBackButton && (
          <Image
            src={IMAGES.FRIEND.SEARCH.BACK_ICON}
            onClick={() => navigate(-1)}
          />
        )}
        <Text size="body1" fontWeight="bold">
          {text}
        </Text>
      </S.HeaderWrapper>
      {children}
    </S.HeaderContainer>
  );
};

export default Header;
