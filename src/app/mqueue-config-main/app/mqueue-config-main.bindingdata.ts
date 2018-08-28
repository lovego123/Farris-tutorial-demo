import { Injectable, Injector } from '@angular/core';
import { NgBindingData, BindingData } from '@farris/devkit';
import { QueueEntity } from '../domain/index';
import { MqueueConfigMainRepository } from '../domain/index';

@Injectable()
@NgBindingData({
    entity: QueueEntity,
    repository: MqueueConfigMainRepository
})
export class MqueueConfigMainBindingData extends BindingData {
    constructor(injector: Injector) {
        super(injector);
    }
}
