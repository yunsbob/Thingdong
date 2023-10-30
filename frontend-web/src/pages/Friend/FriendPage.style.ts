import { Text } from '@/components/atoms/Text/Text.styles';
import { styled } from 'styled-components';

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

const FriendHeaderIcons = styled.div`
  display: flex;
  height: 100%;

  img:first-child {
    margin-right: 0.5rem;
  }
`;

const FriendList = styled.div`
  height: calc(100% - 7rem); // subtract sun height
  padding-bottom: 5rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const FriendBlock = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.color.white};
  align-items: center;
  justify-content: space-between;
  border-radius: 4rem;
  padding: 0.4rem;
  margin-bottom: 1.5rem;

  img:last-child {
    margin-right: 0.5rem;
  }
`;

const FriendBlockProfile = styled.div`
  display: flex;
  align-items: center;
`;

const FriendBlockText = styled(Text)`
  margin-left: 0.5rem;
`;

const Sun = styled.div`
  background-color: ${({ theme }) => theme.color.lightYellow};
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  position: absolute;
  right: 2rem;
  bottom: 3rem;
`;

export {
  FriendContainer,
  FriendHeaderIcons,
  FriendList,
  FriendBlock,
  FriendBlockProfile,
  FriendBlockText,
  Sun,
};
