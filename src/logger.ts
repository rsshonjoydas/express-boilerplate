import dayjs from 'dayjs';
import pino from 'pino';
import PinoPretty from 'pino-pretty';

const stream = PinoPretty({
  colorize: true,
});

export const logger = pino(
  {
    base: {
      pid: false,
    },
    timestamp: () => `,"time":"${dayjs().format('DD MMMM YYYY, hh:mm:ss A')}"`,
  },
  stream
);
