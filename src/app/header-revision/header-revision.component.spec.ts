import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderRevisionComponent } from './header-revision.component';

describe('HeaderRevisionComponent', () => {
  let component: HeaderRevisionComponent;
  let fixture: ComponentFixture<HeaderRevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderRevisionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderRevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
