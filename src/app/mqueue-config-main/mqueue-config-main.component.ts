import { Component, OnInit } from '@angular/core';
import { MqueueConfigMainViewModel } from './app/mqueue-config-main.viewmodel';

@Component({
  selector: 'app-mqueue-config-main',
  templateUrl: './mqueue-config-main.component.html',
  styleUrls: ['./mqueue-config-main.component.css']
})
export class MqueueConfigMainComponent implements OnInit {


  constructor(private viewModel: MqueueConfigMainViewModel) { }

  ngOnInit() {
    this.viewModel.loadData();
  }

}
