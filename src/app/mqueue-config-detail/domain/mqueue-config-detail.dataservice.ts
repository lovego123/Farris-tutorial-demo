import { Injectable } from '@angular/core';
import { RestfulService } from '@farris/devkit';
import { MqueueConfigDetailDataStorage } from './mqueue-config-detail.datastorage';
import { DataUtil } from '../../shared/data-util';
import { Router } from '@angular/router';
import { MqueueConfigDetailUIState } from '../app/mqueue-config-detail.uistate';


@Injectable()
export class MqueueConfigDetailDataService {

    private url = 'http://127.0.0.1:8080/mqueue';

    constructor(
        private dataStore: MqueueConfigDetailDataStorage,
        private rest: RestfulService,
        private router: Router,
        private uiState: MqueueConfigDetailUIState
    ) { }

    /**
     * 加载数据
     */
    loadData(dataId: string): void {
        this.rest.get(`${this.url}/${dataId}`, { id: dataId }).subscribe((result: any) => {
            this.dataStore.load([result.data]);
            this.uiState.fileType = result.data['WJLX'];
            this.uiState.isRepeat = result.data['isRepeat'];
            this.uiState.repeatTimes = result.data['CSCS'];
            this.uiState.compensateStrategy = result.data['BCCL'];
            this.uiState.bcfileType = result.data['BCWJLX'];
        });
    }
    /**
     * 创建新数据
     */
    loadNewData(): void {
        this.rest.get(`${this.url}/new`, {}).subscribe((result: any) => {
            const data = result.data;
            data['DLBH'] = DataUtil.createNM();
            data['CJSJ'] = DataUtil.createTime();
            this.uiState.fileType = null;
            this.uiState.isRepeat = false;
            this.uiState.repeatTimes = null;
            this.uiState.compensateStrategy = null;
            this.uiState.bcfileType = null;
            // TODO 创建默认数据
            data['CJR'] = 'administrator';
            data['DLZT'] = '未启用';
            data['isPreset'] = '否';
            data['XXFX'] = '双向';
            data['XXMS'] = '点到点(P2P)模型';
            data['MQFUQ'] = '默认服务器';

            this.dataStore.load([data]);
        });
    }

    /**
     * 保存数据
     */
    save(data: any) {
        this.rest.post(this.url, data).subscribe(() => {
            this.router.navigate(['main']);
        });
    }
}
