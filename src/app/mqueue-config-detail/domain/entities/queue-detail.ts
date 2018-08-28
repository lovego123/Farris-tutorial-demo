import { Entity, NgField } from '@farris/devkit';

/**
 * 队列详情实体
 */
export class QDetailEntity extends Entity {

    /**
     * 队列编号
     */
    @NgField(true)
    DLBH: string;

    /**
     * 队列名称
     */
    @NgField()
    DLMC: string;

    /**
     * 队列描述
     */
    @NgField()
    DLMS: string;

    /**
     * MQ服务器
     */
    @NgField()
    MQFUQ: string;

    /**
     * 队列状态
     */
    @NgField()
    DLZT: string;

    /**
     * 是否系统预置
     */
    @NgField()
    isPreset: string;

    /**
     * 消息方向
     */
    @NgField()
    XXFX: string;

    /**
     * 消息模式
     */
    @NgField()
    XXMS: string;

    /**
     * 创建人
     */
    @NgField()
    CJR: string;

    /**
     * 创建时间
     */
    @NgField()
    CJSJ: string;

}
