import { Injectable, Injector } from '@angular/core';
import { NgRepository, Repository } from '@farris/devkit';
import { MonitorDataStorage } from './monitor.datastorage';
import { BDQEntity } from './entities/BDQ';

@Injectable()
@NgRepository({
    from: MonitorDataStorage,
    entityType: BDQEntity
})
export class MonitorRepository extends Repository<BDQEntity> {
    constructor(injector: Injector) {
        super(injector);
    }
}
