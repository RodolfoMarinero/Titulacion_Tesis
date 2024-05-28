import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaRevisoresComponent } from './tabla-revisores.component';

describe('TablaRevisoresComponent', () => {
  let component: TablaRevisoresComponent;
  let fixture: ComponentFixture<TablaRevisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaRevisoresComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TablaRevisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
