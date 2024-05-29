import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaTesistasComponent } from './tabla-tesistas.component';

describe('TablaTesistasComponent', () => {
  let component: TablaTesistasComponent;
  let fixture: ComponentFixture<TablaTesistasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaTesistasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaTesistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
