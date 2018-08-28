import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigMainDataService } from '../../domain/index';
import { MqueueConfigMainUIState } from '../mqueue-config-main.uistate';

@Injectable()
@NgCommandHandler({
    commandName: 'on-off'
})
export class OnOffHandler extends CommandHandler {
    constructor(
        private dataService: MqueueConfigMainDataService,
        private uiState: MqueueConfigMainUIState
    ) {
        super();
    }
    schedule() {
        this.addTask('on-off', (result: any, context: TaskExecutionContext) => {
            const dataIds = this.uiState.selectedIds;
            if (dataIds.length !== 1) {
                alert('请选择一条队列');
            } else {
                const action = context.command.params.action;
                if (action === 'on') {
                    this.dataService.on(dataIds[0]);
                } else {
                    this.dataService.off(dataIds[0]);
                }
            }
        });
    }
}
