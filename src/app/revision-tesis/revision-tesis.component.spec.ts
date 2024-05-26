import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionTesisComponent } from './revision-tesis.component';

describe('RevisionTesisComponent', () => {
  let component: RevisionTesisComponent;
  let fixture: ComponentFixture<RevisionTesisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisionTesisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RevisionTesisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
