import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarDefinitionsComponent } from './sidebar-definitions.component';

describe('SidebarDefinitionsComponent', () => {
  let component: SidebarDefinitionsComponent;
  let fixture: ComponentFixture<SidebarDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarDefinitionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
