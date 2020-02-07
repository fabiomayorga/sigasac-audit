import { Module } from '@nestjs/common';
import { EasyconfigModule } from 'nestjs-easyconfig';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuditorModule } from './auditor/auditor.module';
import { EntityModule } from './entity/entity.module';

@Module({
    imports: [AuditorModule, EasyconfigModule.register({}), EntityModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
