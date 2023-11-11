import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
`;

const NoFriendTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const FriendWrapper = styled.div`
  height: 90%;
  overflow-y: auto;
`;

export { HeaderWrapper, NoFriendTextContainer, FriendWrapper };
