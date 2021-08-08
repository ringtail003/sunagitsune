import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPencilAltComponent } from './icon-pencil-alt.component';

describe('IconPencilAltComponent', () => {
  let component: IconPencilAltComponent;
  let fixture: ComponentFixture<IconPencilAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconPencilAltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPencilAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
