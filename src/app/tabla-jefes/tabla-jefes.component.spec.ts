import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaJefesComponent } from './tabla-jefes.component';

describe('TablaJefesComponent', () => {
  let component: TablaJefesComponent;
  let fixture: ComponentFixture<TablaJefesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaJefesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaJefesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
