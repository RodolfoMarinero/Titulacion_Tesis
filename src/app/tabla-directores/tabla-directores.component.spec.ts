import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDirectoresComponent } from './tabla-directores.component';

describe('TablaDirectoresComponent', () => {
  let component: TablaDirectoresComponent;
  let fixture: ComponentFixture<TablaDirectoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaDirectoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaDirectoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
