import { Injectable } from '@angular/core';
import {  CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import {  MqueueConfigDetailRepository } from '../../domain/index';
import { MqueueConfigDetailBindingData } from '../mqueue-config-detail.bindingdata';

@Injectable()
@NgCommandHandler({
    commandName: 'removeLYItem'
})
export class RemoveItemHandler extends CommandHandler {

    constructor(
        private repository: MqueueConfigDetailRepository,
        private bindingData: MqueueConfigDetailBindingData,
    ) {
        super();
    }

    schedule() {
        this.addTask('removeItem', (lastResult: any, context: TaskExecutionContext) => {

            // 命令参数值模拟
            const command = context.command;
            const listPath = command.params.listPath;

            const dlbh = this.bindingData['DLBH'];
            const mqueueEntity = this.repository.getEntityById(dlbh);
            const lyId = this.bindingData['LY'].currentId;
            mqueueEntity.LY.remove(lyId);
        });
    }

}

