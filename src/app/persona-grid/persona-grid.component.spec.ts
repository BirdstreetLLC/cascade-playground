import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaGridComponent } from './persona-grid.component';

describe('PersonaGridComponent', () => {
  let component: PersonaGridComponent;
  let fixture: ComponentFixture<PersonaGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonaGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PersonaGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
