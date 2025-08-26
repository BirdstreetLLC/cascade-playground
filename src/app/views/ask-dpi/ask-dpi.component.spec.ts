import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskDpiComponent } from './ask-dpi.component';

describe('AskDpiComponent', () => {
  let component: AskDpiComponent;
  let fixture: ComponentFixture<AskDpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AskDpiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AskDpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
