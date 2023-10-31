import * as S from '@/components/molecules/Spinner/Spinner.style';
import spinnerGif from '@/assets/gifs/spinner.gif';
import { Image } from '@/components/atoms/Image/Image';

const Spinner = () => {
  return (
    <S.SpinnerContainer>
      <Image src={spinnerGif} />
    </S.SpinnerContainer>
  );
};

export { Spinner };
