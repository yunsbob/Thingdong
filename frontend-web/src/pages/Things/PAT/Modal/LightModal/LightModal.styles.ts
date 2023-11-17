import Modal from '@/components/molecules/Modal/Modal';
import styled from 'styled-components';

const LightModalContainer = styled(Modal)`
  display: flex;
  flex-direction: column;
  padding: 1.8rem;

  .react-colorful {
    margin-left: auto;
    margin-right: auto;
    width: 13rem;
    margin-bottom: 1.5rem;
  }
`;

const LightModalHeader = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: relative;
  margin-bottom: 1.5rem;

  img {
    position: absolute;
    right: 0;
    top: 0;
  }
`;

const LightModalContents = styled.div`
  padding: 0.5rem;
`;

const LightModalPreviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 13rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 1.5rem;
`;

const LightModalPreviewBox = styled.div<{ $backgroundColor?: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  box-shadow: ${({ theme }) => theme.shadow.shadowBtn};
  width: 50%;
  height: 3rem;
  border-radius: 10px;
`;

export {
  LightModalContainer,
  LightModalHeader,
  LightModalContents,
  LightModalPreviewWrapper,
  LightModalPreviewBox,
};
