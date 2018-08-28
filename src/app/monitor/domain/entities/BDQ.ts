import { Entity, NgField, EntityList, NgList } from '@farris/devkit';
import { GDEntity } from './GD';

export class BDQEntity extends Entity {
    /**
     * 绑定器内码
     */
    @NgField(true)
    BDQNM: string;

    /**
     * 绑定器名称
     */
    @NgField()
    BDQMC: string;

    /**
     * 管道列表
     */
    @NgList({
        dataField: 'GD',
        type: GDEntity
    })
    GD: EntityList<GDEntity>;
}
