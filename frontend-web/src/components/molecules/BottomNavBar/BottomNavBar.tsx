import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '@/components/molecules/BottomNavBar/BottomNavBar.styles';
import { Image } from '@/components/atoms/Image/Image';
import { CHILDREN_PATH } from '@/constants/path';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickPath = location.pathname;

  const changePath = (path: keyof typeof CHILDREN_PATH.BOTTOM_NAV_PATH) => {
    navigate(CHILDREN_PATH.BOTTOM_NAV_PATH[path]);
  };

  const srcs = Object.keys(CHILDREN_PATH.BOTTOM_NAV_PATH) as Array<
    keyof typeof CHILDREN_PATH.BOTTOM_NAV_PATH
  >;

  return (
    <S.BottomNavContainer>
      <S.BottomNavWrpper>
        {srcs.map(src => {
          let imageSrc = src.toLowerCase();

          if (onClickPath === '/' && imageSrc === 'home') {
            imageSrc = 'home-activate';
          }

          if (onClickPath === `/${imageSrc}`) {
            imageSrc = `${imageSrc}-activate`;
          }
          return (
            <Image
              key={src}
              src={
                require(`@/assets/images/bottomNavBar/${imageSrc}.png`).default
              }
              onClick={() => changePath(src)}
              width={3}
              height={3}
            ></Image>
          );
        })}
      </S.BottomNavWrpper>
    </S.BottomNavContainer>
  );
};

export default BottomNavBar;
