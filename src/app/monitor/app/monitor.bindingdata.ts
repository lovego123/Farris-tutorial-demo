import { Injectable, Injector } from '@angular/core';
import { NgBindingData, BindingData } from '@farris/devkit';
import { BDQEntity } from '../domain/entities/BDQ';
import { MonitorRepository } from '../domain/monitor.repository';

@Injectable()
@NgBindingData({
    entity: BDQEntity,
    repository: MonitorRepository
})
export class MonitorBindingData extends BindingData {
    constructor(injector: Injector) {
        super(injector);
    }
}
