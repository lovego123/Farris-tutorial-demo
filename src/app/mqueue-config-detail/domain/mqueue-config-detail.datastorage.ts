import { Injectable } from '@angular/core';
import { MemoryStorage } from '@farris/devkit';

@Injectable()
export class MqueueConfigDetailDataStorage extends MemoryStorage {
    constructor() {
        super();
    }
}
