import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';

const HomePage = () => {
  return <Background $backgroundColor={theme.color.black1}>home</Background>;
};

export default HomePage;
