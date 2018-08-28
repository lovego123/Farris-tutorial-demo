import { Injectable, Injector } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgForm, Form, NgFormControl, NgChildForm, NgChildFormArray } from '@farris/devkit';
import { MqueueConfigDetailBindingData } from './mqueue-config-detail.bindingdata';

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

}
