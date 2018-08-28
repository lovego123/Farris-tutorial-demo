import { Injector, Injectable } from '@angular/core';
import { NgViewModel, ViewModel, NgCommand } from '@farris/devkit';
import { MqueueConfigDetailBindingData } from './mqueue-config-detail.bindingdata';
import { MqueueConfigDetailForm } from './mqueue-config-detail.form';
import { MqueueConfigDetailUIState } from './mqueue-config-detail.uistate';


@Injectable()
@NgViewModel({
    children: [],
    binding: MqueueConfigDetailBindingData,
    form: MqueueConfigDetailForm
})
export class MqueueConfigDetailViewModel extends ViewModel {

    public uiState: MqueueConfigDetailUIState;

    constructor(injector: Injector) {
        super(injector);
        this.uiState = this.injector.get<MqueueConfigDetailUIState>(MqueueConfigDetailUIState);
    }

    /**
     * 表单加载
     */
    @NgCommand({
        name: 'formLoad'
    })
    public formLoad() { }

    /**
     * 保存信息
     */
    @NgCommand({
        name: 'save'
    })
    public save() { }

    /**
     * 关闭并返回到主界面
     */
    @NgCommand({
        name: 'close'
    })
    public close() { }
}
