import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqueueConfigMainComponent } from './mqueue-config-main.component';

const routes: Routes = [
  { path: '', component: MqueueConfigMainComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MqueueConfigMainRoutingModule { }
