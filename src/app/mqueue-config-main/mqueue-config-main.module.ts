import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqueueConfigMainComponent } from './mqueue-config-main.component';
import { MqueueConfigMainRoutingModule } from './mqueue-config-main-routing.module';
import { GridModule} from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { CommandModule, RestfulService } from '@farris/devkit';
import { KendoBindingModule } from '@farris/kendo-binding';
import { commandHandlers, APP_PROVIDERS } from './app/index';
import { DOMAIN_PROVIDERS } from './domain/index';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogModule } from '@progress/kendo-angular-dialog';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MqueueConfigMainRoutingModule,
    GridModule,
    ButtonsModule,
    DialogModule,
    DateInputsModule,
    KendoBindingModule,
    CommandModule.setup(commandHandlers, [])
  ],
  providers: [
    RestfulService,
    DOMAIN_PROVIDERS,
    APP_PROVIDERS
  ],
  declarations: [MqueueConfigMainComponent]
})
export class MqueueConfigMainModule { }
