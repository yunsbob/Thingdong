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
