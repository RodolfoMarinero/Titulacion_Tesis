import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRevisorComponent } from './asignacion-revisor.component';

describe('AsignacionRevisorComponent', () => {
  let component: AsignacionRevisorComponent;
  let fixture: ComponentFixture<AsignacionRevisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionRevisorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignacionRevisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
