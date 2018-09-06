export class MqueueConfigDetailUIState {
    /**
     * 内码
     */
    dataId: string;

    /**
     * 动作
     */
    action: string;

    /**
     * 文件类型
     */
    fileType: string;

    /**
     * 补偿文件类型
     */
    bcfileType: string;

    /**
     * 是否重试
     */
    isRepeat: boolean;

    /**
     * 重复次数
     */
    repeatTimes: number;

    /**
     * 补偿策略
     */
    compensateStrategy: string;
}
