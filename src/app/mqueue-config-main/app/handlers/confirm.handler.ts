import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MqueueConfigMainDataService } from '../../domain/index';
import { MqueueConfigMainUIState } from '../mqueue-config-main.uistate';


@Injectable()
@NgCommandHandler({
    commandName: 'confirm'
})
export class ConfirmHandler extends CommandHandler {
    constructor(
        private dataService: MqueueConfigMainDataService,
        private uiState: MqueueConfigMainUIState
    ) {
        super();
    }

    schedule() {
        this.addTask('confirm', () => {
            const dataIds = this.uiState.selectedIds;
            this.dataService.remove(dataIds);
            this.uiState.openDialog = false;
            this.uiState.selectedIds = [];
        });
    }
}
