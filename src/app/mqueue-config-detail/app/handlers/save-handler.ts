import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { MqueueConfigDetailDataService, MqueueConfigDetailRepository, QDetailEntity, RouteInfoEntity } from '../../domain/index';
import { MqueueConfigDetailForm } from '../mqueue-config-detail.form';
import { MqueueConfigDetailUIState } from '../mqueue-config-detail.uistate';

@Injectable()
@NgCommandHandler({
    commandName: 'save'
})
export class SaveHandler extends CommandHandler {

    constructor(
        private dataService: MqueueConfigDetailDataService,
        private repository: MqueueConfigDetailRepository,
        private form: MqueueConfigDetailForm,
        private uiState: MqueueConfigDetailUIState
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

        // 任务信息栏
        data['WJLX'] = this.uiState.fileType;
        const wjForm = this.form.get('WJForm');
        const cxjValue = wjForm['myfile1'].value;
        const gjValue = wjForm['myfile2'].value;
        if (cxjValue) {
            data['CXJMC'] = cxjValue;
        }
        if (gjValue) {
            data['GJMC'] = gjValue;
        }
        // 每次保存完后将两个做转接的FormControl重置
        wjForm['myfile1'].reset('');
        wjForm['myfile2'].reset('');

        // 异常策略栏
        if (this.uiState.isRepeat) {
            data['isRepeat'] = this.uiState.isRepeat;
            data['CSCS'] = this.uiState.repeatTimes;
        } else {
            data['isRepeat'] = false;
            data['CSCS'] = null;
        }
        data['BCCL'] = this.uiState.compensateStrategy;
        data['BCWJLX'] = this.uiState.bcfileType;


        const bcwjForm = this.form.get('BCWJForm');
        const bccxjValue = bcwjForm['myfile1'].value;
        const bcgjValue = bcwjForm['myfile2'].value;
        if (bccxjValue) {
            data['BCCXJMC'] = bccxjValue;
        }
        if (bcgjValue) {
            data['BCGJMC'] = bcgjValue;
        }
        // 每次保存完后将两个做转接的FormControl重置
        bcwjForm['myfile1'].reset('');
        bcwjForm['myfile2'].reset('');

        // 重新归集路由数据
        data['LY'] = [];
        const lyEntityList = qdetailEntity.LY;
        lyEntityList.items.forEach((lyEntity: RouteInfoEntity) => {
            data['LY'].push(lyEntity.data);
        });

        if (!data['DLMC']) {
            alert('队列名称不能为空');
        } else if (!data['DLMS']) {
            alert('队列描述不能为空');
        } else if (!data['XXMS']) {
            alert('消息模式不能为空');
        } else if (!data['XXFX']) {
            alert('消息方向不能为空');
        } else if (!data['MQFUQ']) {
            alert('MQ服务器不能为空');
        } else if (!data['CXJMC'] && !data['GJMC']) {
            alert('任务信息不能为空');
        } else if (data['isRepeat'] && !data['CSCS']) {
            alert('请确认异常重试次数');
        } else if (data['BCCL'] === 'compensate' && !data['BCCXJMC'] && !data['BCGJMC']) {
            alert('请选择异常补偿文件');
        } else {
            this.dataService.save(data);
        }

    }
}
