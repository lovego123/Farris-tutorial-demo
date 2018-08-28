import { MqueueConfigMainBindingData } from './mqueue-config-main.bindingdata';
import { MqueueConfigMainViewModel } from './mqueue-config-main.viewmodel';
import { LoadDataHandler } from './handlers/load.handler';
import { Provider } from '@angular/core';
import { MqueueConfigMainUIState } from './mqueue-config-main.uistate';
import { RemoveHandler } from './handlers/remove.handler';
import { RouteHandler } from './handlers/route.handler';
import { OnOffHandler } from './handlers/on-off.handler';
import { MonitorHandler } from './handlers/monitor.handler';
import { CancelHandler } from './handlers/cancel.handler';
import { ConfirmHandler } from './handlers/confirm.handler';




// 应用层Providers
const APP_PROVIDERS: Provider[] = [
    MqueueConfigMainBindingData,
    MqueueConfigMainViewModel,
    MqueueConfigMainUIState
];
// 命令处理
const commandHandlers = [
    LoadDataHandler,
    RemoveHandler,
    RouteHandler,
    OnOffHandler,
    MonitorHandler,
    CancelHandler,
    ConfirmHandler
];

export {
    APP_PROVIDERS,
    commandHandlers,
};
