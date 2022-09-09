import pino from 'pino';
import pretty from 'pino-pretty';

export default class LoggerAdapter {
    constructor({ config }) {
        this.logger = pino(
            pretty({
                translateTime: true,
                singleLine: true,
                colorize: config.environment === 'local',
                ignore: 'pid,hostname',
                errorLikeObjectKeys: [],
            })
        );
    }
}
