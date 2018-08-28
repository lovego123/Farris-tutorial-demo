import { Provider } from '@angular/core';
import { MqueueConfigDetailBindingData } from './mqueue-config-detail.bindingdata';
import { MqueueConfigDetailForm } from './mqueue-config-detail.form';
import { MqueueConfigDetailViewModel } from './mqueue-config-detail.viewmodel';
import { MqueueConfigDetailUIState } from './mqueue-config-detail.uistate';
import { MqueueConfigDetailStateMachine } from './mqueue-config-detail.statemachine';
import { FormLoadHandler } from './handlers/form-load.handler';
import { SaveHandler } from './handlers/save-handler';
import { CloseHandler } from './handlers/close-handler';


const APP_PROVIDERS: Provider[] = [
    MqueueConfigDetailBindingData,
    MqueueConfigDetailForm,
    MqueueConfigDetailViewModel,
    MqueueConfigDetailUIState,
    MqueueConfigDetailStateMachine
];

const commandHandlers = [
    FormLoadHandler,
    SaveHandler,
    CloseHandler
];
export {
    MqueueConfigDetailBindingData,
    MqueueConfigDetailForm,
    MqueueConfigDetailViewModel,
    MqueueConfigDetailUIState,
    MqueueConfigDetailStateMachine,

    commandHandlers,
    APP_PROVIDERS
};
