import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightsViewComponent } from './traffic-lights-view.component';

describe('TrafficLightsViewComponent', () => {
  let component: TrafficLightsViewComponent;
  let fixture: ComponentFixture<TrafficLightsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrafficLightsViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrafficLightsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
