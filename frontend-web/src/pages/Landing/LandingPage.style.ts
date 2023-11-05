import styled from 'styled-components';

const LandingContainer = styled.div`
  margin: 0;
`;

const SceneContainer = styled.div`
  animation: fadeIn 2.5s forwards;
  position: absolute;
  transform: translate(-45%, -45%) scale(111%);
  left: 50%;
  top: 45%;
  width: 100%;

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
  transform: scale(100%) translate(-50%, -50%) rotate(-6deg);
  animation: fadeIn 0.5s 2s forwards;
  /* scaleUp 3.5s 2.5s forwards; */

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  /* @keyframes scaleUp {
    from {
      transform: translate(-50%, 0%) rotate(-6deg);
    }
    to {
      transform: translate(-50%, -50%) rotate(-6deg);
    }
  } */
`;

const LandingButtonWrapper = styled.div`
  z-index: 1;
  position: relative;
  padding: 56px;
  transform: translateY(65vh);
  animation: fadeIn 1s 2s forwards;
  opacity: 0;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export {
  LandingContainer,
  LandingTextContainer,
  SceneContainer,
  LandingButtonWrapper,
};
