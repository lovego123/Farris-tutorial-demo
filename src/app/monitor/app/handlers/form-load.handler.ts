
import { Injectable } from '@angular/core';
import { CommandHandler, NgCommandHandler } from '@farris/devkit';
import { MonitorDataService } from '../../domain/index';


@Injectable()
@NgCommandHandler({
  commandName: 'formLoad'
})
class FormLoadHandler extends CommandHandler {

  constructor(
    private dataService: MonitorDataService,
  ) {
    super();
  }

  schedule() {
    this.addTask('formLoad', () => {
      this.dataService.loadData();
    });
  }
}

export { FormLoadHandler };
