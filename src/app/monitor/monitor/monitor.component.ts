import { Component, OnInit } from '@angular/core';
import { MonitorViewModel } from '../app/index';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {

  constructor(
    private viewModel: MonitorViewModel
  ) { }

  ngOnInit() {
    this.viewModel.formLoad();
  }

}
