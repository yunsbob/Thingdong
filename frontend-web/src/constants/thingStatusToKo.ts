// TODO: 커튼 센서는 열림, 닫힘
// TODO: 스위치는 켜짐, 꺼짐
// TODO: 온습도는 온도와 습도 알려주기
const thingStatusToKo = {
  OFFLINE: '오프라인',
  ON: '켜짐',
  OFF: '꺼짐',
  SENSOR: {
    ON: '감지됨',
    OFF: '꺼짐',
    OFFLINE: '오프라인',
  },
} as const;

export { thingStatusToKo };
