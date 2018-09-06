import { Injectable } from '@angular/core';
import { EntityFactory, EntityList, CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { RouteInfoEntity, MqueueConfigDetailRepository } from '../../domain/index';
import { DataUtil } from '../../../shared/data-util';
import { MqueueConfigDetailBindingData } from '../mqueue-config-detail.bindingdata';

@Injectable()
@NgCommandHandler({
    commandName: 'addLYItem'
})
class AddItemHandler extends CommandHandler {

    constructor(
        private repository: MqueueConfigDetailRepository,
        private bindingData: MqueueConfigDetailBindingData,
    ) {
        super();
    }

    schedule() {
        this.addTask('addItem', (lastResult: any, context: TaskExecutionContext) => {

            // 命令参数值模拟
            const command = context.command;
            const listPath = command.params.listPath;

            const dlbh = this.bindingData['DLBH'];
            const mqueueEntity = this.repository.getEntityById(dlbh);
            this.addLYEntity(dlbh, mqueueEntity.LY);
        });
    }

    addLYEntity(dlbh: string, lyEntityList: EntityList<RouteInfoEntity>) {

        // TODO：应该有负责创建带默认值的空实体的封装。
        const newLYData = {
            LYNM: DataUtil.createNM(), DLBH: dlbh, LYBH: DataUtil.createBH('LY'),
            LYWD: '', LYWDZ: ''
        };
        const newLYEntity = EntityFactory<RouteInfoEntity>(RouteInfoEntity, newLYData);
        lyEntityList.appendNew(newLYEntity);
    }

}

export { AddItemHandler };
