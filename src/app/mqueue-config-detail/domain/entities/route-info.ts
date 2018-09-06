import { Entity, NgField } from '@farris/devkit';

/**
 * 路由规则实体
 */
export class RouteInfoEntity extends Entity {

    /**
     * 路由内码
     */
    @NgField(true)
    LYNM: string;

    /**
     * 路由编号
     */
    @NgField()
    LYBH: string;

    /**
     * 路由维度
     */
    @NgField()
    LYWD: string;

    /**
     * 路由维度值
     */
    @NgField()
    LYWDZ: string;
}
