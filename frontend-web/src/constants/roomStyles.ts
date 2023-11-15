import { RoomStyle } from '@/types/room';

const DARKMODE = {
  outerBackgroundColor: '#1a1a1a',
  innerBackground:
    'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(39, 60, 77) 140%)',
} as const;

const ROOMSTYLES: { [key: string]: RoomStyle } = {
  yellow: {
    outerBackgroundColor: '#efddad',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(153, 153, 255, 50) 140%)',
  },
  black: {
    outerBackgroundColor: '#000000',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(163, 183, 199, 50) 140%)',
  },
  pink: {
    outerBackgroundColor: '#efddad',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(248, 195, 175) 140%)',
  },
  purple: {
    outerBackgroundColor: '#efdada',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(114, 134, 211) 140%)',
  },
  white: {
    outerBackgroundColor: '#97c7d0',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(250, 227, 217) 140%)',
  },
  green: {
    outerBackgroundColor: '#c0bb9a',
    innerBackground:
      'linear-gradient(rgba(255, 255, 255, 0) 0%, rgb(187, 200, 214) 140%)',
  },
} as const;

export { DARKMODE, ROOMSTYLES };
