import styled from 'styled-components';

const HeaderContainer = styled.div<{
  $marginBottom: number;
  $justifyContent: string;
}>`
  display: flex;
  width: 100%;
  height: 2.5rem;
  min-height: 2.5rem;
  position: sticky;
  top: 0;
  align-items: center;
  justify-content: ${({ $justifyContent }) => $justifyContent};
  margin-bottom: ${({ $marginBottom }) => `${$marginBottom}rem`};
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;

  img:first-child {
    margin-right: 1rem;
  }
`;

export { HeaderContainer, HeaderWrapper };
