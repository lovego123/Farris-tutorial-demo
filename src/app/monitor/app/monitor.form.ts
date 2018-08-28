import { Injectable, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, Form, NgFormControl, NgChildForm, NgChildFormArray } from '@farris/devkit';
import { MonitorBindingData } from './monitor.bindingdata';


@Injectable()
@NgForm({
    bindingData: MonitorBindingData
})
export class GDForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }
    /**
     * 管道名称
     */
    @NgFormControl({
        name: 'GDMC',
        binding: 'GD.GDMC'
    })
    GDMC: FormControl;
    /**
     * 管道描述
     */
    @NgFormControl({
        name: 'GDMS',
        binding: 'GD.GDMS'
    })
    GDMS: FormControl;
    /**
     * 服务单元
     */
    @NgFormControl({
        name: 'FWDY',
        binding: 'GD.FWDY'
    })
    FWDY: FormControl;
    /**
     * 功能模块
     */
    @NgFormControl({
        name: 'GNMK',
        binding: 'GD.GNMK'
    })
    GNMK: FormControl;
    /**
     * 路由信息
     */
    @NgFormControl({
        name: 'LYXX',
        binding: 'GD.LYXX'
    })
    LYXX: FormControl;
    /**
     * 接收总个数
     */
    @NgFormControl({
        name: 'JSZGS',
        binding: 'GD.JSZGS'
    })
    JSZGS: FormControl;

    /**
     * 接收成功个数
     */
    @NgFormControl({
        name: 'JSCGGS',
        binding: 'GD.JSCGGS'
    })
    JSCGGS: FormControl;

    /**
     * 接收失败个数
     */
    @NgFormControl({
        name: 'JSSBGS',
        binding: 'GD.JSSBGS'
    })
    JSSBGS: FormControl;

    /**
     * 发送总个数
     */
    @NgFormControl({
        name: 'FSZGS',
        binding: 'GD.FSZGS'
    })
    FSZGS: FormControl;

    /**
     * 发送成功个数
     */
    @NgFormControl({
        name: 'FSCGGS',
        binding: 'GD.FSCGGS'
    })
    FSCGGS: FormControl;

    /**
     * 发送失败个数
     */
    @NgFormControl({
        name: 'FSSBGS',
        binding: 'GD.FSSBGS'
    })
    FSSBGS: FormControl;
}

@Injectable()
@NgForm({
    bindingData: MonitorBindingData
})
export class MonitorForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }
    /**
     * 绑定器名称
     */
    @NgFormControl({
        name: 'BDQMC',
        binding: 'BDQMC'
    })
    BDQMC: FormControl;
    /**
     * 管道列表
     */
    @NgChildForm({
        name: 'GDForm',
        formType: GDForm
    })
    GDForm: Form;
}
