import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'main/:id', loadChildren: 'app/mqueue-config-detail/mqueue-config-detail.module#MqueueConfigDetailModule' },
  { path: 'main', loadChildren: 'app/mqueue-config-main/mqueue-config-main.module#MqueueConfigMainModule' },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'monitor', loadChildren: 'app/monitor/monitor.module#MonitorModule' }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
