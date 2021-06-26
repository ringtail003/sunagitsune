import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEffectsComponent } from './navbar-effects.component';

describe('NavbarEffectsComponent', () => {
  let component: NavbarEffectsComponent;
  let fixture: ComponentFixture<NavbarEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEffectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
