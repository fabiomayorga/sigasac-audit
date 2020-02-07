import { EasyconfigService } from 'nestjs-easyconfig';

const config: EasyconfigService = new EasyconfigService({ path: '' });

export const APP = {
    name: config.get('APP_NAME'),
    port: parseInt(config.get('APP_PORT'), 10),
    host: config.get('APP_HOST'),
    version: config.get('APP_VERSION')
};