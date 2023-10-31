import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';
import {
  LoginInputWrapper,
  LoginTextWrapper,
} from '@/pages/Login/LoginPage.styles';
import { Ellipse } from '@/pages/SignUp/SignUpPage.styles';
import { Text } from '@/components/atoms/Text/Text.styles';
import { Button } from '@/components/atoms/Button/Button.styles';
import Input from '@/components/atoms/Input/Input';
import { useState } from 'react';
import { useAddLogin } from '@/apis/User/Mutations/useAddLogin';

const LoginPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const allFieldsFilled = userId !== '' && password !== '';
  
  const addLoginMutation = useAddLogin();

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    setUserId(newUserId);
  }

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  }

  const handleLoginClick = () => {
    addLoginMutation.mutate({ userId, password });
    // navigatePage('/home');
  };

  return (
    <Background $backgroundColor={theme.color.lightYellow}>
      <LoginTextWrapper>
        <Text size="heading2" color="blue">
          Log In
        </Text>
      </LoginTextWrapper>
      <LoginInputWrapper>
        <Input
          placeholder="ID"
          onChange={e => {
            handleUserIdChange(e);
          }}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={e => {
            handlePasswordChange(e);
          }}
        />
        <Button
          option={allFieldsFilled ? 'activated' : 'deactivated'}
          size="large"
          onClick={handleLoginClick}
        >로그인</Button>
      </LoginInputWrapper>
      <Ellipse></Ellipse>
    </Background>
  );
};

export default LoginPage;
