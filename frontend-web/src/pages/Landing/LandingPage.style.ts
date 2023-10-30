import styled from 'styled-components';

const LandingContainer = styled.div`
  margin: 0 auto;
`;

const SceneContainer = styled.div`
  animation: fadeIn 2.5s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const LandingTextContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%) rotate(-6deg);
  left: 50%;
  top: 45%;
  opacity: 0;
  animation: fadeIn 1s 2s forwards;
`;

export { LandingContainer, LandingTextContainer, SceneContainer };
