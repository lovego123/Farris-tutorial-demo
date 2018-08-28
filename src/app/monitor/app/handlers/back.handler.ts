import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { Router } from '@angular/router';


@Injectable()
@NgCommandHandler({
    commandName: 'back'
})
export class BackHandler extends CommandHandler {
    constructor(
        private router: Router
    ) {
        super();
    }
    schedule() {
        this.addTask('back', () => {
            this.router.navigate(['main']);
        });
    }
}
