import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategieComponent } from './strategie.component';

describe('StrategieComponent', () => {
  let component: StrategieComponent;
  let fixture: ComponentFixture<StrategieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrategieComponent]
    });
    fixture = TestBed.createComponent(StrategieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
