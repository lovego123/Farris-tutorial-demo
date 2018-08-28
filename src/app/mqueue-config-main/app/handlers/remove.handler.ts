import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MqueueConfigMainUIState } from '../mqueue-config-main.uistate';


@Injectable()
@NgCommandHandler({
    commandName: 'remove'
})
export class RemoveHandler extends CommandHandler {
    constructor(
        private uiState: MqueueConfigMainUIState
    ) {
        super();
    }

    schedule() {
        this.addTask('remove', () => {
            const dataIds = this.uiState.selectedIds;
            if (dataIds.length === 0) {
                alert('请选择要删除的订单');
            }
            this.uiState.openDialog = true;
        });
    }
}
