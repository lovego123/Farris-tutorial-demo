import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigDetailDataService } from '../../domain/index';
import { MqueueConfigDetailUIState } from '../mqueue-config-detail.uistate';


@Injectable()
@NgCommandHandler({
    commandName: 'formLoad'
})
export class FormLoadHandler extends CommandHandler {

    constructor(
        private dataService: MqueueConfigDetailDataService,
        private uiState: MqueueConfigDetailUIState,
    ) {
        super();
    }

    schedule() {
        this.addTask('formLoad', () => {
            const dataId = this.uiState.dataId;
            if (dataId === 'new') {
                this.dataService.loadNewData();
            } else {
                this.dataService.loadData(dataId);
            }
        });

    }
}
