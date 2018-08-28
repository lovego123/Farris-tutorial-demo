import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigDetailDataService, MqueueConfigDetailRepository, QDetailEntity } from '../../domain/index';

@Injectable()
@NgCommandHandler({
    commandName: 'save'
})
export class SaveHandler extends CommandHandler {

    constructor(
        private dataService: MqueueConfigDetailDataService,
        private repository: MqueueConfigDetailRepository,
    ) {
        super();
    }

    schedule() {
        this.addTask('save', () => {
            const entities = this.repository.getAllEntities();
            const qdetailEntity = entities[0];

            // 全量提交
            this.submitData(qdetailEntity);

        });
    }

    /**
    * 全量提交
    */
    private submitData(qdetailEntity: QDetailEntity) {

        const data = qdetailEntity.data;
        if (data['DLMC'] === '') {
            alert('队列名称不能为空');
        } else if (data['DLMS'] === '') {
            alert('队列描述不能为空');
        } else if (data['XXMS'] === '') {
            alert('消息模式不能为空');
        } else if (data['XXFX'] === '') {
            alert('消息方向不能为空');
        } else if (data['MQFUQ'] === '') {
            alert('MQ服务器不能为空');
        } else {
            this.dataService.save(data);
        }

    }
}
