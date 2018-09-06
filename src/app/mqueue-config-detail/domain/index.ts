import { Provider } from '@angular/core';
import { MqueueConfigDetailDataService } from './mqueue-config-detail.dataservice';
import { MqueueConfigDetailDataStorage } from './mqueue-config-detail.datastorage';
import { MqueueConfigDetailRepository } from './mqueue-config-detail.repository';
import { QDetailEntity } from './entities/queue-detail';
import { RouteInfoEntity } from './entities/route-info';

const DOMAIN_PROVIDERS: Provider[] = [
    MqueueConfigDetailDataService,
    MqueueConfigDetailDataStorage,
    MqueueConfigDetailRepository,
];

export {
    QDetailEntity,
    RouteInfoEntity,
    MqueueConfigDetailDataService,
    MqueueConfigDetailDataStorage,
    MqueueConfigDetailRepository,
    DOMAIN_PROVIDERS
};
