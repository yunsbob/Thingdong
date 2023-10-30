import styled, { css } from 'styled-components';

const InventoryItemContainer = styled.div<{ $isOwned: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 10px;
  border-radius: 20px;
  background-color: ${({ theme }) => theme.color.white};
  ${({ $isOwned }) =>
    !$isOwned &&
    css`
      background-color: ${({ theme }) => theme.color.white2};
    `}
`;
const ContentWrapper = styled.div<{ $isOwned: boolean }>`
  width: 100%;
  height: 100%;
  ${({ $isOwned }) =>
    !$isOwned &&
    css`
      opacity: 0.4;
    `}
`;
const ThingWrapper = styled.div`
  position: absolute;
  bottom: 7px;
  right: 7px;
`;

export { InventoryItemContainer, ContentWrapper, ThingWrapper };
