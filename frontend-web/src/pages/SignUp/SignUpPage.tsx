import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';

import {
  Ellipse,
  SignUpTextWrapper,
  SignUpInputWrapper,
} from '@/pages/SignUp/SignUpPage.styles';

import { Text } from '@/components/atoms/Text/Text.styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import { useState } from 'react';
import { useAddUser } from '@/apis/User/Mutations/useAddUser';

const SignUpPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const allFieldsFilled = userId !== '' && password !== '' && nickname !== '';

  const addUserMutation = useAddUser();

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNickname = e.target.value;
    setNickname(newNickname);
  };

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    setUserId(newUserId);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const handleSignUpClick = () => {
    addUserMutation.mutate({ userId, password, nickname });
  };

  return (
    <Background $backgroundColor={theme.color.lightYellow}>
      <SignUpTextWrapper>
        <Text size="heading2" color="blue">
          Sign Up
        </Text>
      </SignUpTextWrapper>
      <SignUpInputWrapper>
        <Input
          placeholder="NickName"
          onChange={e => {
            handleNicknameChange(e);
          }}
        />
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
          onClick={handleSignUpClick}
        >
          계정 만들기
        </Button>
      </SignUpInputWrapper>
      <Ellipse></Ellipse>
    </Background>
  );
};

export default SignUpPage;
