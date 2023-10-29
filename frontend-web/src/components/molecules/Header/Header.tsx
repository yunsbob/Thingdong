import { Text, TextProps } from '@/components/atoms/Text/Text.styles';
import * as S from '@/components/molecules/Header/Header.styles';

interface HeaderProps extends TextProps {
  text: string;
  children?: React.ReactNode;
}

const Header = ({ text, children }: HeaderProps) => {
  return (
    <S.HeaderContainer>
      <Text size="body1" fontWeight="bold">
        {text}
      </Text>
      {children}
    </S.HeaderContainer>
  );
};

export default Header;
