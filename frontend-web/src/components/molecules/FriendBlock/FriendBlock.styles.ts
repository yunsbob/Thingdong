import { Text } from '@/components/atoms/Text/Text.styles';
import { styled } from 'styled-components';

const FriendBlockContainer = styled.div<{ $backgroundColor: string }>`
  display: flex;
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  align-items: center;
  justify-content: space-between;
  border-radius: 4rem;
  padding: 0.4rem;
  margin-bottom: 1rem;

  img:last-child {
    margin-right: 0.9rem;
  }
`;

const FriendBlockProfile = styled.div`
  display: flex;
  align-items: center;
`;

const FriendBlockText = styled(Text)<{ ellipse: boolean }>`
  margin-left: 0.5rem;
  ${props =>
    props.ellipse &&
    `  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 4.5rem;`}
`;

const FriendAlarmBlockWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img:first-child {
    margin-right: 0.2rem;
  }
`;

export {
  FriendBlockContainer,
  FriendBlockProfile,
  FriendBlockText,
  FriendAlarmBlockWrapper,
};
