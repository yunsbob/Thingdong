import { useMemo } from 'react'; // 안 써도 될듯?
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlideWrapper } from '@/components/organisms/Slick/Slick.styles';

interface SliderProps {
  /** 슬라이더 아이템 요소 */
  children: React.ReactNode;
  /** 커스텀 클래스 */ // 안 써도 될듯?
  className?: string;
  /** 자동재생 (속도 설정시 number 타입으로) */ // 안 써도 될듯?
  autoplay?: boolean | number;
  /** 슬라이더 속도 */
  speed?: number;
  /** 반복 여부 */ // 안 써도 될듯?
  loop?: boolean;
}

function Slick({
  children,
  className,
  autoplay = false,
  speed = 300,
  loop = false,
}: SliderProps) {

  // slick option값 설정
  const settings = useMemo<Settings>(
    () => ({
      dots: true,
      infinite: false,
      speed,
      slidesToShow: 3,
      autoplay: Boolean(autoplay),
    }),
    [autoplay, loop, speed]
  );
  
  return (
    <SlideWrapper className={className}>
      <Slider {...settings}>{children}</Slider>
    </SlideWrapper>
  );
}

export default Slick;