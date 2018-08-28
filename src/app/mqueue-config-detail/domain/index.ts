import { Provider } from '@angular/core';
import { MqueueConfigDetailDataService } from './mqueue-config-detail.dataservice';
import { MqueueConfigDetailDataStorage } from './mqueue-config-detail.datastorage';
import { MqueueConfigDetailRepository } from './mqueue-config-detail.repository';
import { QDetailEntity } from './entities/queue-detail';


const DOMAIN_PROVIDERS: Provider[] = [
    MqueueConfigDetailDataService,
    MqueueConfigDetailDataStorage,
    MqueueConfigDetailRepository,
];

export{
    QDetailEntity,
    MqueueConfigDetailDataService,
    MqueueConfigDetailDataStorage,
    MqueueConfigDetailRepository,
    DOMAIN_PROVIDERS
};
