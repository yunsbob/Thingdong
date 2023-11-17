import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';

import {
  Ellipse,
  SignUpTextWrapper,
  SignUpInputWrapper,
  ErrorMassegeWrapper,
} from '@/pages/SignUp/SignUpPage.styles';

import { Text } from '@/components/atoms/Text/Text.styles';
import Input from '@/components/atoms/Input/Input';
import Button from '@/components/atoms/Button/Button';
import { useRef, useState } from 'react';
import { useAddUser } from '@/apis/User/Mutations/useAddUser';

const SignUpPage = () => {
  const [userId, setUserId] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');

  const nicknameRef = useRef<HTMLInputElement>(null);
  const userIdRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [validationError, setValidationError] = useState<string>('');

  const isNicknameValid = (nickname: string) => nickname.length <= 8;
  const isUserIdValid = (userId: string) => userId.length >= 4;
  const isPasswordValid = (password: string) =>
    password.length >= 8 &&
    /[a-zA-Z]/.test(password) &&
    /\d/.test(password);

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
    if (!isNicknameValid(nickname)) {
      setValidationError('닉네임은 8자 이하이어야 합니다.');
      nicknameRef.current?.focus();
      return;
    }
    if (!isUserIdValid(userId)) {
      setValidationError('아이디는 4자 이상이어야 합니다.');
      userIdRef.current?.focus();
      return;
    }
    if (!isPasswordValid(password)) {
      setValidationError(
        '비밀번호는 8자 이상이며, 영문과 숫자를 포함해야 합니다.'
      );
      passwordRef.current?.focus();
      return;
    }

    setValidationError('');
    addUserMutation.mutate({ userId, password, nickname });
  };

  return (
    <Background $backgroundColor={theme.color.lightYellow}>
      <SignUpTextWrapper>
        <Text size="heading2" color="blue">
          Sign Up
        </Text>
        {validationError && (
        <ErrorMassegeWrapper>
          <Text size="body4" color="danger">
            {validationError}
          </Text>
        </ErrorMassegeWrapper>
      )}
      </SignUpTextWrapper>

      <SignUpInputWrapper>
        <Input
          ref={nicknameRef}
          placeholder="닉네임 (8자 이하)"
          onChange={e => {
            handleNicknameChange(e);
          }}
        />
        <Input
          ref={userIdRef}
          placeholder="아이디 (4자 이상)"
          onChange={e => {
            handleUserIdChange(e);
          }}
        />
        <Input
          ref={passwordRef}
          placeholder="패스워드 (영문, 숫자 포함 8자 이상)"
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
