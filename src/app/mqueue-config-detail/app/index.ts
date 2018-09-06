import { Provider } from '@angular/core';
import { MqueueConfigDetailBindingData } from './mqueue-config-detail.bindingdata';
import { MqueueConfigDetailForm } from './mqueue-config-detail.form';
import { MqueueConfigDetailViewModel } from './mqueue-config-detail.viewmodel';
import { MqueueConfigDetailUIState } from './mqueue-config-detail.uistate';
import { FormLoadHandler } from './handlers/form-load.handler';
import { SaveHandler } from './handlers/save-handler';
import { CloseHandler } from './handlers/close-handler';
import { AddItemHandler } from './handlers/add-item.handler';
import { RemoveItemHandler } from './handlers/remove-item.handler';


const APP_PROVIDERS: Provider[] = [
    MqueueConfigDetailBindingData,
    MqueueConfigDetailForm,
    MqueueConfigDetailViewModel,
    MqueueConfigDetailUIState,
];

const commandHandlers = [
    FormLoadHandler,
    SaveHandler,
    CloseHandler,
    AddItemHandler,
    RemoveItemHandler
];
export {
    MqueueConfigDetailBindingData,
    MqueueConfigDetailForm,
    MqueueConfigDetailViewModel,
    MqueueConfigDetailUIState,

    commandHandlers,
    APP_PROVIDERS
};
