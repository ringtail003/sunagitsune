import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEffectsMenuComponent } from './navbar-effects-menu.component';

describe('NavbarEffectsMenuComponent', () => {
  let component: NavbarEffectsMenuComponent;
  let fixture: ComponentFixture<NavbarEffectsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEffectsMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEffectsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
