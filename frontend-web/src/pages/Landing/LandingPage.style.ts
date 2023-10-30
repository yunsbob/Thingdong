import styled from 'styled-components';

const LandingContainer = styled.div`
  margin: 0 auto;
`;

const SceneContainer = styled.div`
  animation: fadeIn 2.5s forwards;
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;

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
  left: 50%;
  top: 45%;
  opacity: 0;
  overflow-y: visible;
  animation: 
    fadeIn 0.5s 2s forwards, 
    scaleUp 0.5s 2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes scaleUp {
    from {
      transform: translate(-50%, -50%) rotate(-6deg) scale(85%);
    }
    to {
      transform: translate(-50%, -50%) rotate(-6deg) scale(100%);
    }
  }

`;

export { LandingContainer, LandingTextContainer, SceneContainer };
