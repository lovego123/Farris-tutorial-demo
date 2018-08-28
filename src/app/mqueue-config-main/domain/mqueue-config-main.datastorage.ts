import { Injectable, Injector } from '@angular/core';
import { MemoryStorage } from '@farris/devkit';

@Injectable()
export class MqueueConfigMainDataStorage extends MemoryStorage {
    constructor() {
        super();
    }
}
