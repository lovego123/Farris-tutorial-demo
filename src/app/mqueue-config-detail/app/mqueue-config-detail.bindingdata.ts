import { Injectable, Injector } from '@angular/core';
import { NgBindingData, BindingData } from '@farris/devkit';
import { QDetailEntity, MqueueConfigDetailRepository } from '../domain/index';

@Injectable()
@NgBindingData({
    entity: QDetailEntity,
    repository: MqueueConfigDetailRepository
})
export class MqueueConfigDetailBindingData extends BindingData {
    constructor(injector: Injector) {
        super(injector);
    }
}
