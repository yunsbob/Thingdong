import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';

import {
  SignUpEllipse,
  SignUpTextWrapper,
  SignUpInputWrapper,
} from '@/pages/SignUp/SignUpPage.styles';

import { Text } from '@/components/atoms/Text/Text.styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '@/constants/path';
import { useAddUser } from '@/apis/User/Mutations/useAddUser';

const SignUpPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const allFieldsFilled = userId !== '' && password !== '' && nickname !== '';

  const addUserMutation = useAddUser();

  const navigate = useNavigate();
  const navigatePage = (path: string) => {
    navigate(path);
  };

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
    console.log(userId, password, nickname);
    addUserMutation.mutate({ userId, password, nickname });
    navigatePage(PATH.SPLASH);
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
        ></Input>
        <Input
          placeholder="ID"
          onChange={e => {
            handleUserIdChange(e);
          }}
        ></Input>
        <Input
          placeholder="Password"
          type="password"
          onChange={e => {
            handlePasswordChange(e);
          }}
        ></Input>
        <Button option={allFieldsFilled ? "activated" : "deactivated"} size="large" onClick={handleSignUpClick}>
          계정 만들기
        </Button>
      </SignUpInputWrapper>
      <SignUpEllipse></SignUpEllipse>
    </Background>
  );
};

export default SignUpPage;
