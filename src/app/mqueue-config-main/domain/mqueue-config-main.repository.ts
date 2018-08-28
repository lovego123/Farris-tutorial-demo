import { Injectable, Injector } from '@angular/core';
import { NgRepository, Repository } from '@farris/devkit';
import { MqueueConfigMainDataStorage } from './mqueue-config-main.datastorage';
import { QueueEntity } from './entities/queue-info.entity';


@Injectable()
@NgRepository({
    from: MqueueConfigMainDataStorage,
    entityType: QueueEntity
})
export class MqueueConfigMainRepository extends Repository<QueueEntity> {
    constructor(injector: Injector) {
        super(injector);
    }
}
