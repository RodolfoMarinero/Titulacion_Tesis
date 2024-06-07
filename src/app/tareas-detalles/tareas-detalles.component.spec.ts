import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasDetallesComponent } from './tareas-detalles.component';

describe('TareasDetallesComponent', () => {
  let component: TareasDetallesComponent;
  let fixture: ComponentFixture<TareasDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TareasDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
