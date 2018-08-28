import { NgModule} from '@angular/core';
import { CommandModule, RestfulService } from '@farris/devkit';
import { CommonModule } from '@angular/common';
import { MonitorRoutingModule } from './monitor-routing.module';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { MonitorComponent } from './monitor/monitor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoBindingModule } from '@farris/kendo-binding';
import { APP_PROVIDERS, commandHandlers } from './app/index';
import { DOMAIN_PROVIDERS } from './domain/index';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MonitorRoutingModule,
    DropDownsModule,
    GridModule,
    LayoutModule,
    DateInputsModule,
    KendoBindingModule,
    CommandModule.setup(commandHandlers, []),
  ],
  providers: [
    RestfulService,
    DOMAIN_PROVIDERS,
    APP_PROVIDERS
  ],
  declarations: [ MonitorComponent]
})
export class MonitorModule { }
