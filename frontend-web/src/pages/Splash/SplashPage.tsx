import { Background } from '@/components/atoms/Background/Background.style';
import SlickItem from '@/components/molecules/SlickItem/SlickItem';
import SplashEllipse from '@/pages/Splash/SplashPage.styles';

const SplashPage = () => {
  return (
    <>
      <Background>
        <SlickItem />
      </Background>
      <SplashEllipse />
    </>
  );
};

export default SplashPage;
