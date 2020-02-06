import { EasyconfigService } from 'nestjs-easyconfig';

const config: EasyconfigService = new EasyconfigService({ path: '' });

export const DATABASE = {
    host: config.get('DB_HOST'),
    port: config.get('DB_PORT'),
    username: config.get('DB_USERNAME'),
    password: config.get('DB_PASSWORD'),
    name: config.get('DB_NAME')
};
