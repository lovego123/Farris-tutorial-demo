import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MqueueConfigMainComponent } from './mqueue-config-main.component';

describe('MqueueConfigMainComponent', () => {
  let component: MqueueConfigMainComponent;
  let fixture: ComponentFixture<MqueueConfigMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MqueueConfigMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MqueueConfigMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
