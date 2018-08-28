
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MonitorDataService } from '../../domain/index';
import { Router } from '@angular/router';
import { BDQData } from '../data.BDQ';


@Injectable()
@NgCommandHandler({
    commandName: 'view'
})
export class ViewHandler extends CommandHandler {

    constructor(
        private dataService: MonitorDataService,
        private bdqData: BDQData
    ) {
        super();
    }

    schedule() {
        this.addTask('view', () => {
            this.dataService.viewData(this.bdqData.selectedValue);
        });
    }
}
