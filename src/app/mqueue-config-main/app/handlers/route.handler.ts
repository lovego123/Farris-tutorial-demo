import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigMainBindingData } from '../mqueue-config-main.bindingdata';


@Injectable()
@NgCommandHandler({
    commandName: 'route'
})
export class RouteHandler extends CommandHandler {

    constructor(
        private bindingData: MqueueConfigMainBindingData,
        private router: Router
    ) {
        super();
    }

    schedule() {
        this.addTask('route', (result: any, context: TaskExecutionContext) => {
            const action = context.command.params.action;
            const dlbh = (action === 'add') ? 'new' : this.bindingData['DLBH'];
            this.router.navigate(['main', dlbh, { action }]);
        });
    }
}
