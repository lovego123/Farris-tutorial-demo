import { Entity, NgField } from '@farris/devkit';

export class GDEntity extends Entity {
    /**
     * 管道内码
     */
    @NgField(true)
    GDNM: string;

    /**
     * 管道名称
     */
    @NgField()
    GDMC: string;

    /**
     * 管道描述
     */
    @NgField()
    GDMS: string;

    /**
     * 服务单元
     */
    @NgField()
    FWDY: string;

    /**
     * 功能模块
     */
    @NgField()
    GNMK: string;

    /**
     * 路由信息
     */
    @NgField()
    LYXX: string;

    /**
     * 接收总个数
     */
    @NgField()
    JSZGS: number;

    /**
     * 接收成功个数
     */
    @NgField()
    JSCGGS: number;

    /**
     * 接收失败个数
     */
    @NgField()
    JSSBGS: number;

    /**
     * 发送总个数
     */
    @NgField()
    FSZGS: number;

    /**
     * 发送成功个数
     */
    @NgField()
    FSCGGS: number;

    /**
     * 发送失败个数
     */
    @NgField()
    FSSBGS: number;
}
