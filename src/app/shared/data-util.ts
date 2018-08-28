export class DataUtil {

    /**
     * 创建队列编号
     */
    static createBH() {
        // const S4 = function() {
        //     return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        // };
        // return (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());
        return '' + Math.round(Math.random() * 10000);
    }

    /**
     * 队列创建时间
     */
    static createTime() {
        const d = new Date();
        return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    }

}
