import { useLocation, useNavigate } from 'react-router-dom';
import * as S from '@/components/molecules/BottomNavBar/BottomNavBar.styles';
import { Image } from '@/components/atoms/Image/Image';
import { CHILDREN_PATH } from '@/constants/path';
import theme from '@/styles/theme';
import { useState } from 'react';

type PathType = keyof typeof CHILDREN_PATH.BOTTOM_NAV_PATH;

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickPath = location.pathname === '/' ? '/home' : location.pathname;

  const changePath = (path: PathType) => {
    setActivePath(path);
    navigate(CHILDREN_PATH.BOTTOM_NAV_PATH[path]);
  };

  const paths = Object.keys(CHILDREN_PATH.BOTTOM_NAV_PATH) as Array<PathType>;

  const BottomNavStyle = {
    backgroundColor:
      onClickPath  === '/home'
        ? 'transparent'
        : theme.color.blue2,
  };

  const [activePath, setActivePath] = useState<PathType>('HOME');

  return (
    <S.BottomNavContainer style={BottomNavStyle}>
      <S.BottomNavWrpper>
        {paths.map(path => {
          return (
            <Image
              key={path}
              src={
                require(
                  `@/assets/images/bottomNavBar/${path.toLowerCase()}${
                    onClickPath.replaceAll('/', '').includes(path.toLowerCase()) ? '-activate' : ''
                  }.png`
                ).default
              }
              onClick={() => changePath(path)}
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
