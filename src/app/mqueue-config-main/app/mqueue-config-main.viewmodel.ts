import { Injector, Injectable } from '@angular/core';
import { NgViewModel, ViewModel, NgCommand } from '@farris/devkit';
import { MqueueConfigMainBindingData } from './mqueue-config-main.bindingdata';
import { MqueueConfigMainUIState } from './mqueue-config-main.uistate';

@Injectable()
@NgViewModel({
    children: [],
    binding: MqueueConfigMainBindingData
})
export class MqueueConfigMainViewModel extends ViewModel {
    /**
     * UI状态
     */
    private uiState: MqueueConfigMainUIState;

    constructor(injector: Injector) {
        super(injector);
        this.uiState = this.injector.get<MqueueConfigMainUIState>(MqueueConfigMainUIState);
    }

    /**
     * 加载数据
     */
    @NgCommand({
        name: 'loadData'
    })
    public loadData() { }

    /**
    * 删除
    */
    @NgCommand({
        name: 'remove',
    })
    public remove() { }

    /**
     * 取消
     */
    @NgCommand({
        name: 'cancel'
    })
    public cancel() { }

    /**
     * 确认
     */
    @NgCommand({
        name: 'confirm'
    })
    public confirm() { }

    /**
     * 新增
     */
    @NgCommand({
        name: 'route',
        params: {
            action: 'add'
        }
    })
    public add() { }

    /**
     * 修改
     */
    @NgCommand({
        name: 'route',
        params: {
            action: 'edit'
        }
    })
    public edit() { }

    /**
     * 启用
     */
    @NgCommand({
        name: 'on-off',
        params: {
            action: 'on'
        }
    })
    public on() { }

    /**
     * 停用
     */
    @NgCommand({
        name: 'on-off',
        params: {
            action: 'off'
        }
    })
    public off() { }

    /**
     *监控
     */
    @NgCommand({
        name: 'monitor'
    })
    public monitor() { }

}
