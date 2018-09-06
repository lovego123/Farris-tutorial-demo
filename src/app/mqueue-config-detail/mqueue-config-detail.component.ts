import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MqueueConfigDetailViewModel } from './app/index';

@Component({
  selector: 'app-mqueue-config-detail',
  templateUrl: './mqueue-config-detail.component.html',
  styleUrls: ['./mqueue-config-detail.component.css']
})
export class MqueueConfigDetailComponent implements OnInit {

  constructor(
    private viewModel: MqueueConfigDetailViewModel,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: Params) => {
      this.viewModel.uiState.dataId = params.get('id');
      this.viewModel.uiState.action = params.get('action');
      this.viewModel.formLoad();
    });
  }

}
