import { Injectable } from '@angular/core';
import { MemoryStorage } from '@farris/devkit';

@Injectable()
export class MonitorDataStorage extends MemoryStorage {
    constructor() {
        super();
    }
}
