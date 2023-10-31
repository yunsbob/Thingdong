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
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';

const SignUpPage = () => {
  const navigate = useNavigate();

  const navigatePage = (path: string) => {
    navigate(path);
  }

  return (
    <Background $backgroundColor={theme.color.lightYellow}>
      <SignUpTextWrapper>
        <Text size="heading2" color="blue">Sign Up</Text>
      </SignUpTextWrapper>
      <SignUpInputWrapper>
        <Input placeholder="NickName"></Input>
        <Input placeholder="ID"></Input>
        <Input placeholder="Password"></Input>
        <Button option='deactivated' size='large' onClick={() => navigatePage(PATH.SPLASH)}>계정 만들기</Button>
      </SignUpInputWrapper>
      <SignUpEllipse></SignUpEllipse>
    </Background>
  );
};

export default SignUpPage;
