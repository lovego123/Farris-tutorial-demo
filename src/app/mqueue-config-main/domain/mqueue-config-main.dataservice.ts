import { Injectable, Injector } from '@angular/core';
import { RestfulService } from '@farris/devkit';
import { MqueueConfigMainDataStorage } from './mqueue-config-main.datastorage';
import { MqueueConfigMainRepository } from './mqueue-config-main.repository';

@Injectable()
export class MqueueConfigMainDataService {

    private url = 'http://127.0.0.1:8080/mqueue';
    //    private url = 'assets/data/mqueue-data.json';

    constructor(
        private rest: RestfulService,
        private dataStore: MqueueConfigMainDataStorage,
        private repository: MqueueConfigMainRepository
    ) { }

    /**
     * 加载数据
     */
    loadData(): void {
        this.rest.get(this.url, {}).subscribe((result: any) => {
            this.dataStore.load(result.data);
        });
    }
    /**
     * 删除并重新加载
     */
    remove(ids: string[]) {
        this.rest.post(this.url + '/batch-delete', ids).subscribe(() => {
            this.loadData();
        });
    }
    /**
     * 启用
     */
    on(dataId: string) {
        this.rest.get(`${this.url}/${dataId}`, { id: dataId }).subscribe((result: any) => {
            const data = result.data;
            if (data['DLZT'] === '启用') {
                alert('该队列已经启用');
            } else {
                data['DLZT'] = '启用';
                this.rest.post(this.url, data).subscribe(() => {
                    this.loadData();
                });
            }
        });
    }
    /**
     * 停用
     */
    off(dataId: string) {
        this.rest.get(`${this.url}/${dataId}`, { id: dataId }).subscribe((result: any) => {
            const data = result.data;
            if (data['DLZT'] === '未启用') {
                alert('该队列还没有启用');
            } else {
                data['DLZT'] = '未启用';
                this.rest.post(this.url, data).subscribe(() => {
                    this.loadData();
                });
            }
        });
    }
}
