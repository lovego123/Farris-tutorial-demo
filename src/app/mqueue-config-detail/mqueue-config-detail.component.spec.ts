import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqueueConfigDetailComponent } from './mqueue-config-detail.component';

describe('MqueueConfigDetailComponent', () => {
  let component: MqueueConfigDetailComponent;
  let fixture: ComponentFixture<MqueueConfigDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqueueConfigDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqueueConfigDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
