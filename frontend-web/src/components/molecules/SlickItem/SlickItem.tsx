// Slick 내부에 아이템 리스트를 작성해주는 곳

import styled from 'styled-components';
import Slick from '@/components/organisms/Slick/Slick';
import {
  Splash1,
  Splash2,
  Splash3,
  Splash4,
  Splash5,
} from '@/components/molecules/Splash/Splash';
import EnterPage from '@/pages/Enter/EnterPage';

const components = [
  <Splash1 />,
  <Splash2 />,
  <Splash3 />,
  <Splash4 />,
  <Splash5 />,
  <EnterPage />,
];

const SliderItem = styled.div`
  width: 100%;
  height: 100vh;
  left: ${({ key }) => (key === 5 ? '500%' : 'initial')};
  position: relative;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const SlickItem = () => {
  return (
    <>
      <Slick>
        {components.map((Component, index) => (
          <SliderItem key={index}>{Component}</SliderItem>
        ))}
      </Slick>
    </>
  );
};

export default SlickItem;
