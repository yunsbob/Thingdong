import { Image } from '@/components/atoms/Image/Image';
import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/molecules/Header/Header.styles';
import back from '@/assets/images/friend/search/back.png';
interface HeaderProps extends TextProps {
  text: string;
  hasBackButton?: boolean;
  children?: React.ReactNode;
}

const Header = ({ text, hasBackButton = false, children }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        {hasBackButton && <Image src={back} />}
        <Text size="body1" fontWeight="bold">
          {text}
        </Text>
      </S.HeaderWrapper>
      {children}
    </S.HeaderContainer>
  );
};

export default Header;
