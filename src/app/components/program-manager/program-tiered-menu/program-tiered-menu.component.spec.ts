import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramTieredMenuComponent } from './program-tiered-menu.component';

describe('ProgramTieredMenuComponent', () => {
  let component: ProgramTieredMenuComponent;
  let fixture: ComponentFixture<ProgramTieredMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramTieredMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramTieredMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
