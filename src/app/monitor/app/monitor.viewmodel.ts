import { Injector, Injectable } from '@angular/core';
import { NgViewModel, ViewModel, NgCommand } from '@farris/devkit';
import { MonitorForm } from './monitor.form';
import { MonitorBindingData } from './monitor.bindingdata';
import { BDQData } from './data.BDQ';


@Injectable()
@NgViewModel({
    children: [],
    form: MonitorForm,
    binding: MonitorBindingData
})
export class MonitorViewModel extends ViewModel {
    /**
     * 保存下拉列表获取的信息
     */
    public bdqData: BDQData;

    constructor(injector: Injector) {
        super(injector);
        this.bdqData = this.injector.get<BDQData>(BDQData);
    }
    /**
     * 加载数据
     */
    @NgCommand({
        name: 'formLoad'
    })
    public formLoad() { }

    /**
     * 查看
     */
    @NgCommand({
        name: 'view'
    })
    public view() { }
    /**
     * 返回 
     */
    @NgCommand({
        name: 'back'
    })
    public back() { }
}
