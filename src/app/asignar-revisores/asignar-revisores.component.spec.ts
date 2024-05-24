import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarRevisoresComponent } from './asignar-revisores.component';

describe('AsignarRevisoresComponent', () => {
  let component: AsignarRevisoresComponent;
  let fixture: ComponentFixture<AsignarRevisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignarRevisoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AsignarRevisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
