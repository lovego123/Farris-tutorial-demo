import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MqueueConfigDetailComponent } from './mqueue-config-detail.component';
import { MqueueConfigDetailRoutingModule } from './mqueue-config-detail-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DOMAIN_PROVIDERS } from './domain/index';
import { APP_PROVIDERS, commandHandlers } from './app/index';
import { CommandModule, RestfulService } from '@farris/devkit';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { KendoBindingModule } from '@farris/kendo-binding';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HttpModule } from '@angular/http';
import { UploadModule } from '@progress/kendo-angular-upload';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    GridModule,
    DateInputsModule,
    LayoutModule,
    KendoBindingModule,
    DropDownsModule,
    HttpModule,
    UploadModule,

    MqueueConfigDetailRoutingModule,
    CommandModule.setup(commandHandlers, [])
  ],
  providers: [
    RestfulService,
    DOMAIN_PROVIDERS,
    APP_PROVIDERS
  ],
  declarations: [MqueueConfigDetailComponent]
})
export class MqueueConfigDetailModule { }
