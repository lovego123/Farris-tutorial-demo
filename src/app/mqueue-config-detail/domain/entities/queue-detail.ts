import { Entity, NgField, EntityList, NgList } from '@farris/devkit';
import { RouteInfoEntity } from './route-info';

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
     * 执行类别
     */
    @NgField()
    ZXLB: string;

    /**
     * 文件类型
     */
    WJLX: string;

    /**
     * 程序集名称
     */
    @NgField()
    CXJMC: string;

    /**
     * 类名称
     */
    @NgField()
    LMC: string;

    /**
     * 方法名称
     */
    @NgField()
    FFMC: string;

    /**
     * 构件名称
     */
    @NgField()
    GJMC: string;

    /**
     * 是否重试
     */
    @NgField()
    isRepeat: boolean;

    /**
     * 重试次数
     */
    @NgField()
    CSCS: number;

    /**
     * 补偿策略
     */
    @NgField()
    BCCL: string;

    /**
     * 补偿文件类型
     */
    @NgField()
    BCWJLX: string;

    /**
     * 补偿程序集名称
     */
    @NgField()
    BCCXJMC: string;

    /**
     * 补偿类名称
     */
    @NgField()
    BCLMC: string;

    /**
     * 补偿方法名称
     */
    @NgField()
    BCFFMC: string;

    /**
     * 补偿构件名称
     */
    @NgField()
    BCGJMC: string;

    /**
     * 路由规则列表
     */
    @NgList({
        dataField: 'LY',
        type: RouteInfoEntity
    })
    LY: EntityList<RouteInfoEntity>;
}
