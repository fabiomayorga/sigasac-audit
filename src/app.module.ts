import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditorModule } from './auditor/auditor.module';

@Module({
    imports: [AuditorModule, EasyconfigModule.register({})],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
