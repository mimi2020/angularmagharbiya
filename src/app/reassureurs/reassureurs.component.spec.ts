import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReassureursComponent } from './reassureurs.component';

describe('ReassureursComponent', () => {
  let component: ReassureursComponent;
  let fixture: ComponentFixture<ReassureursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReassureursComponent]
    });
    fixture = TestBed.createComponent(ReassureursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
