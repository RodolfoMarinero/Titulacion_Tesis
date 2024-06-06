import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesistaComponent } from './tesista.component';

describe('TesistaComponent', () => {
  let component: TesistaComponent;
  let fixture: ComponentFixture<TesistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TesistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
