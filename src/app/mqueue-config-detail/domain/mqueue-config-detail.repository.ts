import { Injectable, Injector } from '@angular/core';
import { NgRepository, Repository } from '@farris/devkit';
import { MqueueConfigDetailDataStorage } from './mqueue-config-detail.datastorage';
import { QDetailEntity } from './entities/queue-detail';

@Injectable()
@NgRepository({
    from: MqueueConfigDetailDataStorage,
    entityType: QDetailEntity
})
export class MqueueConfigDetailRepository extends Repository<QDetailEntity> {
    constructor(injector: Injector) {
        super(injector);
    }
}
