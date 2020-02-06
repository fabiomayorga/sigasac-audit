import { Module } from '@nestjs/common';
import { AuditorController } from './auditor.controller';
import { AuditorService } from './auditor.service';
import { DatabaseModule } from '../database/database.module';
import { auditorProviders } from './auditor.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [AuditorController],
    providers: [...auditorProviders, AuditorService]
})
export class AuditorModule {}
