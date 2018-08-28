import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqueueConfigDetailComponent } from './mqueue-config-detail.component';



const routes: Routes = [
  { path: '', component: MqueueConfigDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MqueueConfigDetailRoutingModule { }
