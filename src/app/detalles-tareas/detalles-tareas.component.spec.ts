import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesTareasComponent } from './detalles-tareas.component';

describe('DetallesTareasComponent', () => {
  let component: DetallesTareasComponent;
  let fixture: ComponentFixture<DetallesTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesTareasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetallesTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
