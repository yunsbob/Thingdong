import { useLocation, useNavigate } from 'react-router-dom';
import { BottomNavContainer, BottomNavWrpper } from '@/components/molecules/BottomNavBar.style';
import home from '@/assets/images/bottomNavBar/home.png';
import friend from '@/assets/images/bottomNavBar/friend.png';
import things from '@/assets/images/bottomNavBar/things.png';
import inventory from '@/assets/images/bottomNavBar/inventory.png';
import { Image } from '@/components/atoms/Image/Image';
import { CHILDREN_PATH } from '@/constants/path';
import { useState } from 'react';

const BottomNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onClickPath = location.pathname;
  console.log('onclickpath', onClickPath);
  const [src, setSrc] = useState([]);

  const changePath = (path: keyof typeof CHILDREN_PATH, e: any) => {
    console.log(path);
    console.log(e);
    navigate(CHILDREN_PATH[path]);
  };

  const [srcs, setSrcs] = useState(Object.keys(CHILDREN_PATH) as Array<keyof typeof CHILDREN_PATH>);

  return (
    <BottomNavContainer>
      <BottomNavWrpper>
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
              src={require(`@/assets/images/bottomNavBar/${imageSrc}.png`).default}
              onClick={(e: any) => changePath(src, e)}
              width={3}
              height={3}
            ></Image>
          );
        })}
      </BottomNavWrpper>
    </BottomNavContainer>
  );
};

export default BottomNavBar;
