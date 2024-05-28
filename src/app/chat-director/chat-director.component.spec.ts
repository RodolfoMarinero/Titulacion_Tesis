import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDirectorComponent } from './chat-director.component';

describe('ChatDirectorComponent', () => {
  let component: ChatDirectorComponent;
  let fixture: ComponentFixture<ChatDirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatDirectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
