import { Text } from '@/components/atoms/Text/Text.styles';
import Modal from '@/components/molecules/Modal/Modal';
import styled from 'styled-components';

const NewThingsModal = styled(Modal)`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  img {
    align-self: flex-end;
  }
`;

const NewThingsModalHeader = styled.div`
  padding: 1.3rem 1.3rem 0rem;
  position: relative;
`;

const NewThingsModalHeaderNew = styled(Text)`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  transform: rotate(-25deg);
`;

const NewThings = styled.div`
  padding: 1.3rem;
`;

export {
  NewThingsModal,
  NewThingsModalHeader,
  NewThingsModalHeaderNew,
  NewThings,
};
