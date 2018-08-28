import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MqueueConfigMainUIState } from '../mqueue-config-main.uistate';



@Injectable()
@NgCommandHandler({
    commandName: 'cancel'
})
export class CancelHandler extends CommandHandler {
    constructor(
        private uiState: MqueueConfigMainUIState,
    ) {
        super();
    }

    schedule() {
        this.addTask('cancel', () => {
            this.uiState.openDialog = false;
        });
    }
}
