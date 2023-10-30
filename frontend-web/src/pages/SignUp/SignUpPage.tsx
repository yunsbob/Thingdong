import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';
import {
  SignUpEllipse,
  SignUpTextWrapper,
  SignUpInputWrapper
} from '@/pages/SignUp/SignUpPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';

const SignUpPage = () => {
  return (
    <Background $backgroundColor={theme.color.lightYellow}>
      
      <SignUpTextWrapper>
        <Text size="heading2" color="blue">Sign Up</Text>
      </SignUpTextWrapper>
      <SignUpInputWrapper>
        <Input placeholder="NickName"></Input>
        <Input placeholder="ID"></Input>
        <Input placeholder="Password"></Input>
        <Button option='deactivated' size='large'>계정 만들기</Button>
      </SignUpInputWrapper>
      <SignUpEllipse></SignUpEllipse>
    </Background>
  );
};

export default SignUpPage;
