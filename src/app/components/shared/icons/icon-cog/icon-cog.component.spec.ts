import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconCogComponent } from './icon-cog.component';

describe('IconCogComponent', () => {
  let component: IconCogComponent;
  let fixture: ComponentFixture<IconCogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconCogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconCogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
