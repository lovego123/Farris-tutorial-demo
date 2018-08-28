import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { Router } from '@angular/router';


@Injectable()
@NgCommandHandler({
    commandName: 'close'
})
export class CloseHandler extends CommandHandler {
    constructor(private router: Router) {
        super();
    }
    schedule() {
        this.addTask('close', () => {
            this.router.navigate(['main']);
        });
    }
}
