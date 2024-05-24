import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarTesistaComponent } from './registrar-tesista.component';

describe('RegistrarTesistaComponent', () => {
  let component: RegistrarTesistaComponent;
  let fixture: ComponentFixture<RegistrarTesistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarTesistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarTesistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
