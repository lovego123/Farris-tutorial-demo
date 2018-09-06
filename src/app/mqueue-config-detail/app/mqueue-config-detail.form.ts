import { Injectable, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, Form, NgFormControl, NgChildForm, NgChildFormArray } from '@farris/devkit';
import { MqueueConfigDetailBindingData } from './mqueue-config-detail.bindingdata';

@Injectable()
@NgForm({
    bindingData: MqueueConfigDetailBindingData
})
export class LYForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * 路由编号
     */
    @NgFormControl({
        name: 'LYBH',
        binding: 'LY.LYBH'
    })
    LYBH: FormControl;

    /**
     * 路由维度
     */
    @NgFormControl({
        name: 'LYWD',
        binding: 'LY.LYWD'
    })
    LYWD: FormControl;

    /**
     * 路由维度值
     */
    @NgFormControl({
        name: 'LYWDZ',
        binding: 'LY.LYWDZ'
    })
    LYWDZ: FormControl;
}

@Injectable()
@NgForm({
    bindingData: MqueueConfigDetailBindingData
})
export class WJForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * 程序集名称
     */
    @NgFormControl({
        name: 'CXJMC',
        binding: 'CXJMC'
    })
    CXJMC: FormControl;

    /**
     * 类名称
     */
    @NgFormControl({
        name: 'LMC',
        binding: 'LMC',
    })
    LMC: FormControl;

    /**
     * 方法名称
     */
    @NgFormControl({
        name: 'FFMC',
        binding: 'FFMC'
    })
    FFMC: FormControl;

    /**
     * 构件名称
     */
    @NgFormControl({
        name: 'GJMC',
        binding: 'GJMC'
    })
    GJMC: FormControl;

    /**
     * 程序集文件
     */
    @NgFormControl({
        name: 'myfile1',
    })
    myfile1: FormControl;

    /**
     * 构件文件
     */
    @NgFormControl({
        name: 'myfile2',
    })
    myfile2: FormControl;
}

@Injectable()
@NgForm({
    bindingData: MqueueConfigDetailBindingData
})
export class BCWJForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * 补偿程序集名称
     */
    @NgFormControl({
        name: 'BCCXJMC',
        binding: 'BCCXJMC'
    })
    BCCXJMC: FormControl;

    /**
     * 补偿类名称
     */
    @NgFormControl({
        name: 'BCLMC',
        binding: 'BCLMC',
    })
    BCLMC: FormControl;

    /**
     * 补偿方法名称
     */
    @NgFormControl({
        name: 'BCFFMC',
        binding: 'BCFFMC'
    })
    BCFFMC: FormControl;

    /**
     * 补偿构件名称
     */
    @NgFormControl({
        name: 'BCGJMC',
        binding: 'BCGJMC'
    })
    BCGJMC: FormControl;

    /**
     * 程序集文件
     */
    @NgFormControl({
        name: 'myfile1',
    })
    myfile1: FormControl;

    /**
     * 构件文件
     */
    @NgFormControl({
        name: 'myfile2',
    })
    myfile2: FormControl;
}


@Injectable()
@NgForm({
    bindingData: MqueueConfigDetailBindingData
})
export class MqueueConfigDetailForm extends Form {
    constructor(injector: Injector) {
        super(injector);
    }

    /**
     * 队列名称
     */
    @NgFormControl({
        name: 'DLMC',
        binding: 'DLMC'
    })
    DLMC: FormControl;

    /**
     * 队列描述
     */
    @NgFormControl({
        name: 'DLMS',
        binding: 'DLMS'
    })
    DLMS: FormControl;

    /**
     * 消息模式
     */
    @NgFormControl({
        name: 'XXMS',
        binding: 'XXMS'
    })
    XXMS: FormControl;

    /**
     * 消息方向
     */
    @NgFormControl({
        name: 'XXFX',
        binding: 'XXFX'
    })
    XXFX: FormControl;

    /**
     * MQ服务器
     */
    @NgFormControl({
        name: 'MQFUQ',
        binding: 'MQFUQ'
    })
    MQFUQ: FormControl;

    /**
    * 服务单元
    */
    @NgFormControl({
        name: 'FWDY',
        binding: 'FWDY'
    })
    FWDY: FormControl;

    /**
     * 功能模块
     */
    @NgFormControl({
        name: 'GNMK',
        binding: 'GNMK'
    })
    GNMK: FormControl;

    /**
     * 执行类别
     */
    @NgFormControl({
        name: 'ZXLB',
        binding: 'ZXLB'
    })
    ZXLB: FormControl;


    /**
     * 路由子表单
     */
    @NgChildForm({
        name: 'LYForm',
        formType: LYForm
    })
    LYForm: Form;

    /**
     * 文件子表单
     */
    @NgChildForm({
        name: 'WJForm',
        formType: WJForm
    })
    WJForm: Form;

    /**
     * 补偿文件子表单
     */
    @NgChildForm({
        name: 'BCWJForm',
        formType: BCWJForm
    })
    BCWJForm: Form;
}

