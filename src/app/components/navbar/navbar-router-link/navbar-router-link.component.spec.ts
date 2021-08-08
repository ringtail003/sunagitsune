import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarRouterLinkComponent } from './navbar-router-link.component';

describe('NavbarRouterLinkComponent', () => {
  let component: NavbarRouterLinkComponent;
  let fixture: ComponentFixture<NavbarRouterLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarRouterLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarRouterLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
