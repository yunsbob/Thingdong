import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/molecules/Header/Header.styles';
import back from '@/assets/images/friend/search/back.png';
import { useNavigate } from 'react-router-dom';
interface HeaderProps extends TextProps {
  text: string;
  hasBackButton?: boolean;
  $marginHeaderBottom?: number;
  children?: React.ReactNode;
}

const Header = ({
  text,
  hasBackButton = false,
  children,
  $marginHeaderBottom = 1.3,
}: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer $marginBottom={$marginHeaderBottom}>
      <S.HeaderWrapper>
        {hasBackButton && <Image src={back} onClick={() => navigate(-1)} />}
        <Text size="body1" fontWeight="bold">
          {text}
        </Text>
      </S.HeaderWrapper>
      {children}
    </S.HeaderContainer>
  );
};

export default Header;
