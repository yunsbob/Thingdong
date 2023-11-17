import { useEffect, useState } from 'react';

/**
 *
 * @param duration ms
 * @param callback
 * @returns
 */
export const useLongPress = (callback: Function, duration: number) => {
  const [startLongPress, setStartLongPress] = useState(false);

  useEffect(() => {
    let timer: number | undefined;

    if (startLongPress) {
      timer = setTimeout(callback, duration);
    } else {
      clearTimeout(timer);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [callback, duration, startLongPress]);

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false),
  };
};
