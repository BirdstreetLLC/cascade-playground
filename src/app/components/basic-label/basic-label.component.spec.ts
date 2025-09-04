import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLabelComponent } from './basic-label.component';

describe('BasicLabelComponent', () => {
  let component: BasicLabelComponent;
  let fixture: ComponentFixture<BasicLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLabelComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
