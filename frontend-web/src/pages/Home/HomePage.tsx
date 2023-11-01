import Button from '@/components/atoms/Button/Button';
import theme from '@/styles/theme';
import { Background } from '@/components/atoms/Background/Background.style';
import MyRoomScene from '@/components/molecules/MyRoom/MyRoom';

const HomePage = () => {
  return (<MyRoomScene/>)
  // <Background $backgroundColor={theme.color.black1}>home</Background>;
};

export default HomePage;
