import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DATABASE_AUDIT_REPOSITORY } from '../config';

import { DatabaseAudit } from './auditor.entity';

@Injectable()
export class AuditorService {
    constructor(
        @Inject(DATABASE_AUDIT_REPOSITORY)
        private readonly databaseAudit: Repository<DatabaseAudit>
    ) {}
}
