import styled from 'styled-components';

export const UnboxingHistoryContainer = styled.div`
  margin-top: 15px;
`;

export const UnboxingItemWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
  gap: 18px;
  margin-top: 10px;
  height: calc(63vh - 7rem);
  padding-bottom: 4rem;
  overflow-y: auto;
`;

export const UnboxingItemContainer = styled.div`
  width: 100%;
  min-width: 160px;
  height: 140px;
  background-color: ${({ theme }) => theme.color.coolGrey};
  position: relative; // 상대 위치 설정
`;
export const UnboxingItemBox = styled.div`
  width: 100%;
  height: 74px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 20px;
  position: absolute; // 절대 위치 설정
  bottom: 0; // 컨테이너의 하단에 위치
  display: flex;
  align-items: flex-end; // 바닥에 붙임
  justify-content: center;
  padding-bottom: 11px; // 바닥에서 10px 위에 위치
`;
export const ImageWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translateX(-50%) translateY(50%);
`;
export const TextWrapper = styled.div`
  text-align: center;
`;
export const DateBox = styled.div`
  background-color: ${({ theme }) => theme.color.lightYellow};
  width: fit-content;
  padding: 5px 10px;
  border-radius: 21px;
  position: absolute; // 절대 위치 설정
  top: 15px; // 상단에 위치
  left: 0; // 오른쪽에 위치
  transform: rotate(-15deg);
`;
