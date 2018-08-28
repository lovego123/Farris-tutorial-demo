import { Provider } from '@angular/core';

// Handlers
import { FormLoadHandler } from './handlers/form-load.handler';
import { MonitorBindingData } from './monitor.bindingdata';
import { MonitorViewModel } from './monitor.viewmodel';
import { MonitorForm } from './monitor.form';
import { BackHandler } from './handlers/back.handler';
import { BDQData } from './data.BDQ';
import { ViewHandler } from './handlers/view.handler';

// Providers
const APP_PROVIDERS: Provider[] = [
    MonitorBindingData,
    MonitorViewModel,
    MonitorForm,
    BDQData,
];

const commandHandlers = [FormLoadHandler, BackHandler, ViewHandler];
export {
    MonitorBindingData,
    MonitorViewModel,
    MonitorForm,

    APP_PROVIDERS,
    commandHandlers
};
