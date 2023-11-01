import styled from 'styled-components';
import Slick from '@/components/organisms/Slick/Slick';

interface SlickItemProps {
  item: string;
}

const SliderItem = styled.div`
  width: 100%;
  img {
    max-width: 100%;
    height: auto;
  }
`;

const items: SlickItemProps[] = [
  {
    item: 'http://placehold.it/1200x400',
  },
  {
    item: 'http://placehold.it/1200x400/ff0000',
  },
  {
    item: 'http://placehold.it/1200x400/00ffff',
  },
];

function Item() {
  return (
    <Slick>
      {items.map((item, index) => (
        <SliderItem key={index}>
          <img src={item.item} />
        </SliderItem>
      ))}
    </Slick>
  );
}
