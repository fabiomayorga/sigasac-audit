import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { DB_ENTITY_REPOSITORY } from '../config';
import { DBEntity } from './entity.entity';

@Injectable()
export class EntityService {
    constructor(
        @Inject(DB_ENTITY_REPOSITORY)
        private readonly dbEntity: Repository<DBEntity>
    ) {}
}
