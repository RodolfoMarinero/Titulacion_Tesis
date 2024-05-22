import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRevsarComponent } from './detalle-revsar.component';

describe('DetalleRevsarComponent', () => {
  let component: DetalleRevsarComponent;
  let fixture: ComponentFixture<DetalleRevsarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRevsarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetalleRevsarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
