import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaRevisarTesisComponent } from './vista-revisar-tesis.component';

describe('VistaRevisarTesisComponent', () => {
  let component: VistaRevisarTesisComponent;
  let fixture: ComponentFixture<VistaRevisarTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaRevisarTesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaRevisarTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
