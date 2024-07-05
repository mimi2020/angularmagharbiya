import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuisommesnousComponent } from './quisommesnous.component';

describe('QuisommesnousComponent', () => {
  let component: QuisommesnousComponent;
  let fixture: ComponentFixture<QuisommesnousComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuisommesnousComponent]
    });
    fixture = TestBed.createComponent(QuisommesnousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
