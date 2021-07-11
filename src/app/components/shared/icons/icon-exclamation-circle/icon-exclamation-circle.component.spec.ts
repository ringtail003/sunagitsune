import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconExclamationCircleComponent } from './icon-exclamation-circle.component';

describe('IconExclamationCircleComponent', () => {
  let component: IconExclamationCircleComponent;
  let fixture: ComponentFixture<IconExclamationCircleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconExclamationCircleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconExclamationCircleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
