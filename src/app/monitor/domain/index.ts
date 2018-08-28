import { Provider } from '@angular/core';
import { MonitorDataService } from './monitor.dataservice';
import { MonitorDataStorage } from './monitor.datastorage';
import { MonitorRepository } from './monitor.repository';
import { BDQEntity } from './entities/BDQ';

const DOMAIN_PROVIDERS: Provider[] = [
    MonitorDataService,
    MonitorDataStorage,
    MonitorRepository
];

export {
    BDQEntity,
    MonitorDataService,
    MonitorDataStorage,
    MonitorRepository,
    DOMAIN_PROVIDERS
};

