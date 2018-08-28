import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigMainDataService } from '../../domain/index';

@Injectable()
@NgCommandHandler({
    commandName: 'loadData'
})
export class LoadDataHandler extends CommandHandler {
    constructor(private dataservice: MqueueConfigMainDataService) {
        super();
    }

    schedule() {
        this.addTask('loadData', () => {
            this.dataservice.loadData();
        });
    }
}
