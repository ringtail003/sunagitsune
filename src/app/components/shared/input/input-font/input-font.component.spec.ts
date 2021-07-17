import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFontComponent } from './input-font.component';

describe('InputFontComponent', () => {
  let component: InputFontComponent;
  let fixture: ComponentFixture<InputFontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFontComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
