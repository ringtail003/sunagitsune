import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputFilenameComponent } from './input-filename.component';

describe('InputFilenameComponent', () => {
  let component: InputFilenameComponent;
  let fixture: ComponentFixture<InputFilenameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputFilenameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputFilenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
