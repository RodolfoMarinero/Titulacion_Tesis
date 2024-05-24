import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEnvioComponent } from './modal-envio.component';

describe('ModalEnvioComponent', () => {
  let component: ModalEnvioComponent;
  let fixture: ComponentFixture<ModalEnvioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEnvioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModalEnvioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
