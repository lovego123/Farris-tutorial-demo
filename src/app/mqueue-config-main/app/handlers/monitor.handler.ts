import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler, TaskExecutionContext } from '@farris/devkit';
import { Router } from '@angular/router';

@Injectable()
@NgCommandHandler({
    commandName: 'monitor'
})
export class MonitorHandler extends CommandHandler {
    constructor(private router: Router) {
        super();
    }

    schedule() {
        this.addTask('monitor', () => {
            this.router.navigateByUrl('monitor');
        });
    }
}
