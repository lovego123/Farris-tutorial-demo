import { Injectable } from '@angular/core';
import { RestfulService } from '@farris/devkit';
import { MonitorDataStorage } from './monitor.datastorage';
import { BDQData } from '../app/data.BDQ';

@Injectable()
export class MonitorDataService {
    private url = 'http://127.0.0.1:8080/monitor';

    constructor(
        private rest: RestfulService,
        private dataStore: MonitorDataStorage,
        private bdqData: BDQData
    ) {
    }

    /**
     * 加载数据
     */
    loadData(): void {
        this.rest.get(this.url, {}).subscribe((result: any) => {
            if (result.data) {
                this.bdqData.dataInfo = result.data;
                // 默认取第一条数据
                this.bdqData.selectedValue = result.data[0]['BDQNM'];
                this.viewData(this.bdqData.selectedValue);
            }
        });
    }

    /**
     * 查看数据
     */
    viewData(dataId: string) {
        this.rest.get(`${this.url}/${dataId}`, { id: dataId }).subscribe((result: any) => {
            console.log(result);
            this.dataStore.load([result.data]);
        });
    }
}
