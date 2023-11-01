import { Text } from '@/components/atoms/Text/Text.styles';
import { styled } from 'styled-components';

const FriendContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 7rem;
`;

const FriendHeaderIcons = styled.div`
  display: flex;
  height: 100%;

  img:first-child {
    margin-right: 0.5rem;
  }
`;

const NotificationNumberIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${({ theme }) => theme.color.blue};
  position: absolute;
  right: 0.5rem;
  top: 1rem;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sun = styled.div`
  background-color: ${({ theme }) => theme.color.lightYellow};
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
  position: absolute;
  right: 2rem;
  bottom: 4rem;
`;

const NoFriendTextContainer = styled.div`
  display: flex;
  margin-top: 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export {
  FriendContainer,
  FriendHeaderIcons,
  NotificationNumberIcon,
  Sun,
  NoFriendTextContainer,
};
