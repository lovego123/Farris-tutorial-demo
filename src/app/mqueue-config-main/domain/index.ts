import { Provider } from '@angular/core';
import { MqueueConfigMainDataStorage } from './mqueue-config-main.datastorage';
import { MqueueConfigMainRepository } from './mqueue-config-main.repository';
import { MqueueConfigMainDataService } from './mqueue-config-main.dataservice';
import { QueueEntity } from './entities/queue-info.entity';



// Domain层Providers
const DOMAIN_PROVIDERS: Provider[] = [
    MqueueConfigMainDataStorage,
    MqueueConfigMainRepository,
    MqueueConfigMainDataService
];

export {
    DOMAIN_PROVIDERS,
    MqueueConfigMainDataStorage,
    MqueueConfigMainRepository,
    MqueueConfigMainDataService,
    QueueEntity
};
